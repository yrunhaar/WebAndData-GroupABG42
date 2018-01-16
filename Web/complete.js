exports.sql = function(query){
	var id = query["id"];
	var sql = "UPDATE habits SET status = 'Yes' WHERE id = '"+id+"'";
	return sql;
}