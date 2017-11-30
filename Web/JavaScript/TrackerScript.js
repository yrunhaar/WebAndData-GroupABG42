var modal1 = document.getElementById('modaladd');

function newhabitmodal(){
	modal1.style.display = 'block';

}

var modal2 = document.getElementById('modaledit');

function edithabitmodal(){
	modal2.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
    	modal2.style.display = "none";
    }
}

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

var HabitCollection = [];
var HabitTableCounter = 0;
function updateHabitTable(Habit, rownumber){
		var HabitTable = document.getElementById("HabitTable");
		var row = HabitTable.insertRow(rownumber);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = Habit.getname();
		var cell2 = row.insertCell(1);
		cell2.innerHTML = Habit.getdescription();
		var cell3 = row.insertCell(2);
		cell3.innerHTML = Habit.gettype();
		var cell4 = row.insertCell(3);
		cell4.innerHTML = Habit.getDays();
}

function Habit(name, description, type, Days){
	this.name = name;
	this.description = description;
	this.type = type;
	this.Days = Days;

	this.getname = function(){return this.name};
	this.getdescription = function(){return this.description};
	this.gettype = function(){return this.type};
	this.getDays = function(){return this.Days};

	this.setname = function(a){this.name = a};
	this.setdescription = function(a){this.description = a};
	this.settype = function(a){this.type = a};
	this.setDays = function(a){this.Days = a}; 
}


var HabitCounter = 0;
function newHabit(){
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
	console.log(name);
	console.log(description);
	console.log(type);
	console.log(Days);
	if (name == "" || description == "" || type == undefined || Days == undefined) {
		alert("Please fill in the whole form when adding a Habit");
	}else{
	var habit1 = new Habit(name, description, type, Days);
	HabitCollection.push(habit1);
	console.log(HabitCollection[0]);
	var rownumber = HabitCounter+1;
	updateHabitTable(habit1, rownumber);
	selectboxesEditHabit(habit1);
	HabitCounter++;
	}
}

/*function newReminder(){
	
}*/

function selectboxesEditHabit(Habit){
	var select = document.getElementById("Habitselect");
	select.options[select.options.length] = new Option(Habit.getname(), HabitCounter);
}

function edithabitchange(){
	var selectededithabit = HabitCollection[document.getElementById("Habitselect").value];
	console.log(selectededithabit);
	document.getElementById("EditHabitDescription").value = selectededithabit.getdescription();
	var radios = document.getElementsByName("edittype");
	for (var i = 0; i<radios.length; i++) {
		if(radios[i].value == selectededithabit.gettype()){
			radios[i].checked = true;
			break;
		}
	}
}

function editHabit(){
	var selectededithabit = HabitCollection[document.getElementById("Habitselect").value];
	selectededithabit.setdescription(document.getElementById("EditHabitDescription").value);
	var radios = document.getElementsByName("edittype");
	if(radios != undefined){
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				console.log('che')
				console.log(radios[i].value)
				selectededithabit.settype(radios[i].value);
				break;
			}
		}
	}
	selectededithabit.setDays(getCheckedBoxes("EditDaysHabit"));
	var rownumber = parseInt(document.getElementById("Habitselect").value) + 1;
	document.getElementById("HabitTable").deleteRow(rownumber);
	updateHabitTable(selectededithabit, rownumber);
	console.log('new')
	console.log(selectededithabit)
	HabitCollection[document.getElementById("Habitselect").value] = selectededithabit;
	selectboxesEditHabit(selectededithabit);
	document.getElementById("Habitselect").remove(document.getElementById("Habitselect").value);
}

function deleteHabit(){
	var selectededithabit = HabitCollection[document.getElementById("Habitselect").value];
	var rownumber = parseInt(document.getElementById("Habitselect").value) + 1;
	document.getElementById("HabitTable").deleteRow(rownumber);
	HabitCollection[document.getElementById("Habitselect").value] = null;
	document.getElementById("Habitselect").remove(document.getElementById("Habitselect").value);
}


