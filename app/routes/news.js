var newsRoutes = function(app){

	function getController(){
		return app.app.controllers.newsController(app);
	}

	app.get('/news', function(request, response){
		getController().news(request, response);
	});

	app.get('/notice', function(request, response){
		getController().notice(request, response);
	});
}

module.exports = newsRoutes;