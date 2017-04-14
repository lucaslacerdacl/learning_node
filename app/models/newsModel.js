var newsModel = function(){
	this.getNews = function(connection, callback){
		connection.query('select * from news', callback);
	}

	this.addNotice = function(notice, connection, callback){
		connection.query('insert into news set ?', notice, callback);
	}

	return this;
}

module.exports = newsModel;