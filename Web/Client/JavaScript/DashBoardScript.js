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
			cell22.innerHTML ="- id:"+ result[i].id +" name:"+ result[i].name;
		}

	}
	$.getJSON("getHabitListOfUser", updateHabitListOfUser);

	var updatelistHabitofList = function(result){
		console.log(result);
		var row = document.getElementById("querie2table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit of list 1 :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie2table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- id:"+ result[i].id +" name:"+ result[i].title;
		}

	}
	$.getJSON("listHabitofList", updatelistHabitofList);

	var updatelistHabitofListLimit = function(result){
		console.log(result);
		var row = document.getElementById("querie3table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit of list 4 with limit :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie3table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- id:"+ result[i].id +" title:"+ result[i].title;
		}

	}
	$.getJSON("listHabitofListLimit", updatelistHabitofListLimit);

	var updategetFilterFreq = function(result){
		console.log(result);
		var row = document.getElementById("querie4Atable").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit filtered frequency :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie4Atable").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getFilterFreq", updategetFilterFreq);

	var updategetFilterPublic = function(result){
		console.log(result);
		var row = document.getElementById("querie4Btable").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit filtered public :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie4Btable").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getFilterPublic", updategetFilterPublic);

	var updategetFilterDate = function(result){
		console.log(result);
		var row = document.getElementById("querie4Ctable").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit filtered date :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie4Ctable").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getFilterDate", updategetFilterDate);

	var updategetHabitOfUser = function(result){
		console.log(result);
		var row = document.getElementById("querie5table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit of user :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie5table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getHabitOfUser", updategetHabitOfUser);

	var updategetDaysOfHabit = function(result){
		console.log(result);
		var row = document.getElementById("querie6table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Days of habit :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie6table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- Days:"+ result[i].day_name;
		}

	}
	$.getJSON("getDaysOfHabit", updategetDaysOfHabit);

	var updategetHabitOfDay = function(result){
		console.log(result);
		var row = document.getElementById("querie7table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit of date :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie7table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getHabitOfDay", updategetHabitOfDay);

	var updategetCompletedOfDay = function(result){
		console.log(result);
		var row = document.getElementById("querie8table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Completed Habits :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie8table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title:"+ result[i].title;
		}

	}
	$.getJSON("getCompletedOfDay", updategetCompletedOfDay);

	var updategetCompletedInWeek = function(result){
		console.log(result);
		var row = document.getElementById("querie9table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habits completed in each week :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie9table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- Week: "+result[i].each_week+" Amount completed: "+ result[i].number;
		}

	}
	$.getJSON("getCompletedInWeek", updategetCompletedInWeek);

	var updategetTopFive = function(result){
		console.log(result);
		var row = document.getElementById("querie10table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Top 5 habit :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie10table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title: "+result[i].title;
		}

	}
	$.getJSON("getTopFive", updategetTopFive);

	var updategetAverageCompletion = function(result){
		console.log(result);
		var row = document.getElementById("querie12table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit completed in habitlist 3 :"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie12table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- Average: "+result[i].average;
		}

	}
	$.getJSON("getAverageCompletion", updategetAverageCompletion);

	var updategetHabitCompletedMore = function(result){
		console.log(result);
		var row = document.getElementById("querie13table").insertRow(0);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = "Habit completed more often:"
		var cell2 = row.insertCell(1);
		for(var i = 0; i < result.length; i++){
			var row2 = document.getElementById("querie13table").insertRow(i+1);
			var cell21 = row2.insertCell(0);
			var cell22 = row2.insertCell(1);
			cell22.innerHTML ="- title: "+result[i].title + " Average: " + result[i].hh;
		}

	}
	$.getJSON("getHabitCompletedMore", updategetHabitCompletedMore);
};


window.onload = main;
