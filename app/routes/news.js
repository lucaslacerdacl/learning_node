var newsRoutes = function(app){
	app.get('/news', function(request, response){
		
		var connection = app.config.dbConnection();
		var newsModel = app.app.models.newsModel();

		newsModel.getNews(connection, function(error, result){
			response.render('news/news', {notice: result});
		});
	});

	app.get('/notice', function(request, response){
		response.render('news/notice');
	});
}

module.exports = newsRoutes;