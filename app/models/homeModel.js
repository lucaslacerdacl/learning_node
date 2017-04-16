var homeModel = function(){

	this.getNews = function(connection, callback){
		connection.query('select * from news order by date_creation desc limit 5', callback);
	}

	return this;
}

module.exports = homeModel;