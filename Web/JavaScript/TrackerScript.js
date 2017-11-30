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
var HabitTable = document.getElementById("HabitTable");
function updateHabitTable(){
	for (var i = 0; i < HabitCollection.length; i++){
		var array = HabitCollection[i];
		var row = HabitTable.insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = array[0];
		var cell2 = row.insertCell(1);
		cell2.innerHTML = array[1];
		var cell3 = row.insertCell(2);
		cell3.innerHTML = array[2];
		var cell4 = row.insertCell(3);
		cell4.innerHTML = array[3];
	}
}

var name;
var description;
var type;
var Days;
function newHabit(){
	name = document.getElementById("HabitName").value;
	description = document.getElementById("HabitDescription").value;
	var radios = document.getElementsByName("type");
	if(radios != undefined){
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				type = radios[i].value;
				break;
			}
		}
	}
	Days = getCheckedBoxes("DaysHabit");
	console.log(name);
	console.log(description);
	console.log(type);
	console.log(Days);
	if (name == "" || description == "" || type == undefined || Days == undefined) {
		alert("Please fill in the whole form when adding a Habit");
	}else{
	var Habit = [];
	Habit.push(name, description, type, Days);
	HabitCollection.push(Habit);
	console.log(HabitCollection[0]);
	updateHabitTable();
	}
}

/*function newReminder(){
	
}*/

function selectboxesEditHabit(){
	var select = document.getElementById("Habitselect");
	for(var i =0; i < HabitCollection.length; i++){
		var temp = HabitCollection[i];
		select.options[select.options.length] = new Option(temp[0], i);
	}
}

function edithabitchange(){
	var selectededithabit = document.getElementById("Habitselect").value;
	var edithabit = HabitCollection[selectededithabit]
	document.getElementById("EditHabitDescription").value = edithabit[1];
}


