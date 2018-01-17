/*exports.delete = function(HabitCollection, query){
	var id = query["id"];
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
	HabitCollection = copyarray;
	return HabitCollection;
}*/
exports.sql1 = function(query){
	var id = query["id"];
	var sql = "DELETE FROM habits WHERE id = '"+id+"'";
	return sql;
}
exports.sql2 = function(query){
	var id = query["id"];
	var sql = "UPDATE habits SET id = id - 1 WHERE id > '"+id+"'";
	return sql;
}
