var mySql = require('mysql');

var connection = function(){
	return mySql.createConnection({
		host 	 : 'localhost',
		user 	 : 'root',
		password : 'Lucas96',
		database : 'news_portal'
	});
}

module.exports = function(){
	return connection;
}