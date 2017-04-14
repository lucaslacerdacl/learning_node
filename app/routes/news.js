var newsRoutes = function(app){
	app.get('/news', function(request, response){
		response.render('news/news');
	});

	app.get('/notice', function(request, response){
		response.render('news/notice');
	});
}

module.exports = newsRoutes;