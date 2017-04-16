var homeRoutes = function(app){

	function getController(){
		return app.app.controllers.homeController(app);
	}

	app.get('/', function(request, response){
		getController().home(request, response);
	});
}

module.exports = homeRoutes;