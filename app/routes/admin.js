var adminRoutes = function(app){

	function getController(){
		return app.app.controllers.adminController(app);
	}

	app.get('/admin', function(request, response){
		getController().admin(request, response);
	});

	app.post('/admin/save', function(request, response){
		getController().adminSave(request, response);
	});
}

module.exports = adminRoutes;