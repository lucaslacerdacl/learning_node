var newsController = function(app){

	this.news = function(request, response){
		var connection = app.config.dbConnection();
		var newsModel = app.app.models.newsModel();

		newsModel.getNews(connection, function(error, result){
			response.render('news/news', {notice: result});
		});
	};

	this.notice = function(request, response){
		response.render('news/notice');
	};

	return this;
};

module.exports = newsController;