var newsModel = function(){
	this.getNews = function(connection, callback){
		connection.query('select * from news', callback);
	}

	return this;
}

module.exports = newsModel;