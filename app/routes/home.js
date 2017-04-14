var homeRoutes = function(app){
	app.get('/', function(request, response){
		response.send('HOME');
	});
}

module.exports = homeRoutes;