//Server
var express = require("express");
var url = require("url");
var http = require("http");
var app;

var port = process.argv[2];
app = express();
app.use(express.static(__dirname + '/Client'));
http.createServer(app).listen(port);



//MySQL
/*var mysql = reuire('mysql');

var con = mysql.createConnection({
	host: "",
	user: "",
	password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  con.query("CREATE DATABASE YourHabitsDB", function (err, result) {
    if (err) throw err;
    console.log("Habit Database created");
  });
}); */



//Account
var accounts = [];



//Habit
var HabitCollection = [];

app.get("/HabitCollection", function (req, res)){
	res.json(HabitCollection);
}

app.get("addHabit", function (req, res)){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if(query["id"] !== undefined || query["name"] !== undefined || query["description"] !== undefined || query["type"] !== undefined || query["Days"] !== undefined || query["Status"] !== undefined) {
		var tx = {id: query["id"], name: query["name"], description: query["description"], type: query["type"], Days: query{"Days"], Status: query["Status"]};
		HabitCollection.push(tx);
	}
	else{
		res.end("Error: missing parameter");
	}
}