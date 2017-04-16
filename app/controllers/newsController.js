var newsController = function(app){

	var connection = app.config.dbConnection();
	var newsModel = app.app.models.newsModel();

	this.news = function(request, response){
		newsModel.getNews(connection, function(error, result){
			response.render('news/news', {notice: result});
		});
	};

	this.notice = function(request, response){
		newsModel.getNotice(request.query.id, connection, function(error, result){
			response.render('news/notice', {notice: result});
		});
	};

	return this;
};

module.exports = newsController;