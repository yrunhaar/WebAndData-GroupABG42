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
exports.sql = function(query){
	var id = query["id"];
	var sql = "DELETE FROM habits WHERE id = '"+id+"'";
	return sql;
}