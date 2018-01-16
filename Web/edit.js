exports.sql = function(query){
	var id = query["id"];
	var sql = "UPDATE habits SET description = '"+query["description"]+"', type = '"+query["type"]+"', days = '"+query["Days"]+"' WHERE id = '"+id+"'";
	return sql;
}