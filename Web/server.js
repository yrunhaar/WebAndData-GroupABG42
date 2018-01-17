//Server
var express = require("express");
var url = require("url");
var http = require("http");

var adding = require("./add");
var editing = require("./edit");
var completing = require("./complete");
var deleting = require("./delete");

var app;

var port = process.argv[2];
app = express();
app.use(express.static(__dirname + '/Client'));
http.createServer(app).listen(port);



var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1111",
	database: "YourHabitsDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  con.query("SELECT * FROM habits WHERE id IS NOT NULL", function (err, result){
  	if(err) throw err;
  	console.log(result);
  	for (var i = 0; i < result.length; i++) {
		var habit = new Habit(result[i].id, result[i].name, result[i].description, result[i].type, result[i].days, result[i].status);
		HabitCollection.push(habit);
	}
  	console.log(HabitCollection);
  });/*
  con.query("CREATE DATABASE YourHabitsDB", function (err, result) {
    if (err) throw err;
    console.log("Habit Database created");
  });
  var createtableacc = "CREATE TABLE accounts (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, birthday VARCHAR(255) NOT NULL, sexe VARCHAR(10) NOT NULL)"
  con.query(createtableacc, function(err, result){
  	if (err) throw err;
  	console.log("Account table created");
  })
  var createtablelist = "CREATE TABLE HabitList (List_id INT AUTO_INCREMENT PRIMARY KEY, Account_id INT, FOREIGN KEY (Account_id) REFERENCES accounts(id) ON DELETE CASCADE)"
  con.query(createtablelist, function(err, result){
  	if (err) throw err;
  	console.log("Habit List table created");
  })
  var createtablehabits = "CREATE TABLE Habits (id INT PRIMARY KEY, HabitList_id INT, name VARCHAR(20) NOT NULL, description VARCHAR(255) NOT NULL, type VARCHAR(10) NOT NULL, days VARCHAR(255) NOT NULL, status VARCHAR(5) NOT NULL, FOREIGN KEY (HabitList_id) REFERENCES habitlist(List_id))"
  con.query(createtablehabits, function(err, result){
  	if (err) throw err;
  	console.log("Habits table created");
  })*/
});



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


var HabitCollection = [];


app.get("/getHabitCollection", function(req,res){
	con.query("SELECT * FROM habits WHERE id IS NOT NULL", function (err, result){
	  	if(err) throw err;
	  	console.log(result);
	  	HabitCollection = [];
	  	for (var i = 0; i < result.length; i++) {
			var habit = new Habit(result[i].id, result[i].name, result[i].description, result[i].type, result[i].days, result[i].status);
			HabitCollection.push(habit);
		}
	  	console.log(HabitCollection);
	});
	res.json(HabitCollection);
});

app.get("/addHabit", function(req, res){
	var HabitCounter = HabitCollection.length;
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	/*if(query["name"] !== undefined || query["description"] !== undefined || query["type"] !== undefined || query["Days"] !== undefined || query["Status"] !== undefined){
		console.log(query["name"]);
		var habit = new Habit(HabitCounter, query["name"], query["description"], query["type"], query["Days"], query["Status"]);
		console.log(habit);
		HabitCollection.push(habit);
		console.log(HabitCollection);
		res.end("Habit added succesfully");*/
	var sqladd = adding.sql(query, HabitCounter);
	con.query(sqladd, function (err, result){
		if(err) throw err;
		console.log("Habit added to DB");
	});
});

app.get("/editHabit", function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	/*var id = query["id"];
	var habit = HabitCollection[id];
	habit.setdescription(query["description"]);
	if(query["type"] !== undefined){
		var type = query["type"];
		habit.settype(query["type"]);
	}
	habit.setDays(query["Days"]);*/
	var sqlupdate = editing.sql(query);
	con.query(sqlupdate, function (err, result){
		if (err) throw err;
		console.log("Habit updated from DB");
	});
});

app.get("/completedHabit", function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	/*var id = query["id"];
	var habit = HabitCollection[id];
	habit.setStatus("Yes");*/
	var sqlcompleted = completing.sql(query);
	con.query(sqlcompleted, function (err, result){
		if (err) throw err;
		console.log("Habit completed from DB");
	});
});

app.get("/deleteHabit", function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	/*var id = query["id"];
	var habit = HabitCollection[id];
	var copyarray = [];
	for (var i = 0; i < id; i++) {
		copyarray[i] = HabitCollection[i];
	}
	for (var i = id; i < HabitCollection.length-1; i++) {
		copyarray[i] = HabitCollection[i+1];
		copyarray[i].setid(i);
	}
	console.log(copyarray);
	HabitCollection = copyarray;*/
	/*HabitCollection = deleting.delete(HabitCollection, query);*/
	var sqldelete1 = deleting.sql1(query);
	con.query(sqldelete1, function (err, result){
		if (err) throw err;
		console.log("Habit deleted from DB");
	});
	var sqldelete2 = deleting.sql2(query);
	con.query(sqldelete2, function (err, result){
		if (err) throw err;
		console.log("Habits id reorganised from DB");
	});
});
