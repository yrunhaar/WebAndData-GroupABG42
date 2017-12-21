//MAIN FUNCTION (ajax)
var HabitCollection = [];
var main = function () {
	"use strict";
	var update = function(array){
		console.log(array);
		HabitCollection = [];
		for (var i = 0; i < array.length; i++) {
			var habit = new Habit(array[i].id, array[i].name, array[i].description, array[i].type, array[i].Days, array[i].Status);
			HabitCollection.push(habit);
		}
		for (var i = 0; i < HabitCollection.length; i++) {
			var habit = HabitCollection[i];
			var row = habit.getid() + 1;
			updateHabitTable(habit, row);
			selectboxesHabit(habit);
		}
	}
	$.getJSON("getHabitCollection", update);
};
window.onload = main;

var reload = function (){
	for (var i = 0; i < HabitCollection.length; i++) {
		document.getElementById("HabitselectEdit").options.length = 0;
		document.getElementById("HabitselectDelete").options.length = 0;
		document.getElementById("HabitselectCompleted").options.length = 0;
		document.getElementById("HabitTable").deleteRow(1);
	}
	main();
};
setInterval(reload, 2000);
		

//fct to get the values of all the checked boxes
function getCheckedBoxes(checkboxName) {
  var checkboxes = document.getElementsByName(checkboxName);
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }
  return checkboxesChecked;
}


//fct to update habit table
function updateHabitTable(Habit, rownumber){
		var HabitTable = document.getElementById("HabitTable");
		var row = HabitTable.insertRow(rownumber);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = Habit.getname();
		var cell2 = row.insertCell(1);
		cell2.innerHTML = Habit.getdescription();
		var cell3 = row.insertCell(2);
		cell3.innerHTML = Habit.gettype();
		if(cell3.innerHTML == "Positive"){
			cell3.style.color = 'green';
		}
		else{
			cell3.style.color = 'red';
		}
		var cell4 = row.insertCell(3);
		cell4.innerHTML = Habit.getDays();
		var cell5 = row.insertCell(4);
		cell5.innerHTML = null;
		if (Habit.getStatus() == "Yes") {
			cell5.style.backgroundColor = '#29a329';
		}
		else{
			cell5.style.backgroundColor = '#cc0000';
		}
}

//Object : Habit
function Habit(id, name, description, type, Days, Status){
	this.id = id;
	this.name = name;
	this.description = description;
	this.type = type;
	this.Days = Days;
	this.Status = Status;


	this.getid = function(){return this.id};
	this.getname = function(){return this.name};
	this.getdescription = function(){return this.description};
	this.gettype = function(){return this.type};
	this.getDays = function(){return this.Days};
	this.getStatus = function(){return this.Status};

	this.setid = function(a){this.id = a};
	this.setname = function(a){this.name = a};
	this.setdescription = function(a){this.description = a};
	this.settype = function(a){this.type = a};
	this.setDays = function(a){this.Days = a}; 
	this.setStatus = function(a){this.Status = a};
}


//fct to create new habit
function newHabit(){
	HabitCounter = HabitCollection.length;
	var name = document.getElementById("HabitName").value;
	var description = document.getElementById("HabitDescription").value;
	var radios = document.getElementsByName("type");
	var type;
	if(radios != undefined){
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				type = radios[i].value;
				break;
			}
		}
	}
	var Days = getCheckedBoxes("DaysHabit");
	var Status = "No";
	if (name == "" || description == "" || type == undefined || Days == undefined) {
		alert("Please fill in the whole form when adding a Habit");
	}else{
		$.getJSON("addHabit?name="+name+"&description="+description+"&type="+type+"&Days="+Days+"&Status="+Status);
		reload();
		document.getElementById('modaladd').style.display='none'
	}
}



//fct to update select boxes when editing habit
function selectboxesHabit(Habit){
	var select1 = document.getElementById("HabitselectEdit");
	select1.options[select1.options.length] = new Option(Habit.getname(), Habit.getid());
	var select2 = document.getElementById("HabitselectDelete");
	select2.options[select2.options.length] = new Option(Habit.getname(), Habit.getid());
	var select3 = document.getElementById("HabitselectCompleted");
	select3.options[select3.options.length] = new Option(Habit.getname(), Habit.getid());
}

//fct to update text when editing habit
function edithabitchange(){
	var selectededithabit = HabitCollection[document.getElementById("HabitselectEdit").value];
	document.getElementById("EditHabitDescription").value = selectededithabit.getdescription();
	var radios = document.getElementsByName("edittype");
	for (var i = 0; i<radios.length; i++) {
		if(radios[i].value == selectededithabit.gettype()){
			radios[i].checked = true;
			break;
		}
	}
}

//fct to submit edited habit
function editHabit(){
	var id = document.getElementById("HabitselectEdit").value;
	var description = document.getElementById("EditHabitDescription").value;
	var radios = document.getElementsByName("edittype");
	var type;
	if(radios != undefined){
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				type = (radios[i].value);
				break;
			}
		}
	}
	var Days = getCheckedBoxes("EditDaysHabit");
	$.getJSON("editHabit?id="+id+"&description="+description+"&type="+type+"&Days="+Days);
	reload();
	document.getElementById('modaledit').style.display='none'
}

//fct to delete a habit
function deleteHabit(){
	var id = document.getElementById("HabitselectDelete").value;
	$.getJSON("deleteHabit?id="+id);
	reload();
	document.getElementById('modaldelete').style.display='none'
}



//fct to complete a habit
function completeHabit(){
	var id = document.getElementById("HabitselectCompleted").value;
	$.getJSON("completedHabit?id="+id);
	reload();
	document.getElementById('modalcompleted').style.display='none'
}

//close modals when clicking on window
window.onclick = function(event){
	if(event.target == document.getElementById('modaladd')){
		document.getElementById('modaladd').style.display = 'none';
	}
	if(event.target == document.getElementById('modaledit')){
		document.getElementById('modaledit').style.display = 'none';
	}
	if(event.target == document.getElementById('modaldelete')){
		document.getElementById('modaldelete').style.display = 'none';
	}
	if(event.target == document.getElementById('modalcompleted')){
		document.getElementById('modalcompleted').style.display = 'none';
	}
}