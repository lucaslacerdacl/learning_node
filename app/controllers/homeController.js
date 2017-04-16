var homeController = function(app){
	
	var connection = app.config.dbConnection();
	var homeModel = app.app.models.homeModel();
	
	this.home = function(request, response){
		homeModel.getNews(connection, function(error, result){
			response.render('home/index', {news: result});			
		});
	}

	return this;
}

module.exports = homeController;