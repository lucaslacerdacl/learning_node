var homeRoutes = function(app){
	app.get('/', function(request, response){
		response.render('home/index');
	});
}

module.exports = homeRoutes;