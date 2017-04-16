var newsModel = function(){
	this.getNews = function(connection, callback){
		connection.query('select * from news order by date_creation desc', callback);
	}

	this.addNotice = function(notice, connection, callback){
		connection.query('insert into news set ?', notice, callback);
	}

	this.getNotice = function(notice_id, connection, callback){
		connection.query('select * from news where id=?', notice_id, callback);
	}

	return this;
}

module.exports = newsModel;