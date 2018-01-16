exports.sql = function(query, HabitCounter){
	var sql = "INSERT INTO habits (id, name, description, type, days, status) VALUES ('"+HabitCounter+"', '"+query["name"]+"', '"+query["description"]+"', '"+query["type"]+"', '"+query["Days"]+"', '"+query["Status"]+"')";
	return sql;
}