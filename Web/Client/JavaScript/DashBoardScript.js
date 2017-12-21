var main = function(){
	"use strict";
	var updateHabitListOfUser = function(result){
		console.log(result);
		var row = document.getElementById("querie1table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit of User 1 :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie1table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML = result[i];
		}

	}
	$.getJSON("getHabitListOfUser", updateHabitListOfUser);
};


window.onload = main;
