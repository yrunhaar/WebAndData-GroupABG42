//Server
var express = require("express");
var url = require("url");
var http = require("http");
var fs = require('fs');
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
	database: "habit"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});



//queries

app.get("/getHabitListOfUser", function(req, res){
	var sql = "select * from habit_list where owner = 1";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query 1 completed");
  		res.json(result);
  	})
});

app.get("/listHabitofList", function(req, res){
	var sql = "select * from habit where habit_list_id = 1";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/listHabitofListLimit", function(req, res){
	var sql = "select * from habit where habit_list_id = 4 limit 1,2";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getFilterFreq", function(req, res){
	var sql = "select title, frequency_id , frequency.name from habit join frequency on habit.frequency_id = frequency.id where frequency.name like 'DAILY'";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getFilterPublic", function(req, res){
	var sql = "select habit.title , habit_list.id, habit_list.isPublic from habit join habit_list on habit.habit_list_id = habit_list.id where isPublic is false";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getFilterDate", function(req, res){
	var sql = "select habit.title , habit_done.timestamp , habit_done.habit_id from habit inner join habit_done on habit.id = habit_done.habit_id where habit_done.timestamp > '2017-10-30 20:34:04'";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getHabitOfUser", function(req, res){
	var sql = "select habit.title, habit.id , habit_list_id , habit_list.id as list_id, user.id as user_id from habit join habit_list on habit.habit_list_id = habit_list.id left join user on habit_list.owner = user.id where user.name like 'user%'";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getDaysOfHabit", function(req, res){
	var sql = "select habit.title, habit.id , habit_day_of_week.day_of_week_id, day_of_week.name as day_name from habit join habit_day_of_week on habit.id = habit_day_of_week.habit_id join day_of_week on habit_day_of_week.day_of_week_id = day_of_week.id where habit.title like 'Finish Homework'";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getHabitOfDay", function(req, res){
	var sql = "select day_of_week.name as day_name, habit_day_of_week.day_of_week_id, habit.title , habit.id as habit_id , habit_list.id as list_id from day_of_week join  habit_day_of_week on day_of_week.id = habit_day_of_week.day_of_week_id join habit on habit_day_of_week.habit_id = habit.id join habit_list on habit.habit_list_id = habit_list.id where day_of_week.name like 'MONDAY'";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getCompletedOfDay", function(req, res){
	var sql = "select day_of_week.name as day_name , habit.title,habit.id , habit_done.habit_id, habit_done.timestamp, count(habit.id) from day_of_week join habit_day_of_week on day_of_week.id = habit_day_of_week.day_of_week_id left join habit on habit_day_of_week.habit_id = habit.id join habit_done on habit.id = habit_done.habit_id where day_of_week.name like 'MONDAY' group by habit.title";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getCompletedInWeek", function(req, res){
	var sql = "select week(habit_done.timestamp ) as each_week, habit_done.timestamp, habit_done.habit_id,count(habit_done.timestamp) from habit_done group by each_week";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getTopFive", function(req, res){
	var sql = "select habit.title ,habit_done.timestamp ,week(habit_done.timestamp )as each_week ,  MIN(habit_done.timestamp) ,MAX(habit_done.timestamp) from habit join habit_done on habit.id = habit_done.habit_id group by habit.title having  DATEDIFF(MAX(habit_done.timestamp), MIN(habit_done.timestamp)) > 14 ORDER BY DATEDIFF(MAX(habit_done.timestamp), MIN(habit_done.timestamp)) limit 5";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getFreqCoOccurence", function(req, res){
	var sql = "select habit_list.id , habit.title , habit_done.timestamp ,  avg(habit_list.id ) from habit_list join habit on habit_list.id = habit.habit_list_id join habit_done on habit.id = habit_done.habit_id where habit_list.id = 3";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getAverageCompletion", function(req, res){
	var sql = "select habit_list.id , habit.title , habit_done.timestamp ,  avg(habit_list.id ) from habit_list join habit on habit_list.id = habit.habit_list_id join habit_done on habit.id = habit_done.habit_id where habit_list.id = 3 group by habit_list.id";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});

app.get("/getHabitCompletedMore", function(req, res){
	var sql = "select habit_list.id , habit.title , habit_done.timestamp,count(habit_list.id ) as num, avg(habit_list.id ) / count(habit_list.id )as hh ,avg(habit.id) from habit_list join habit on habit_list.id = habit.habit_list_id join habit_done on habit.id = habit_done.habit_id where habit_list.id = 3 group by habit.title having avg(habit.id) > hh";
  	con.query(sql, function(err, result){
  		if (err) throw err;
  		console.log("query completed");
  		res.json(result);
  	})
});
