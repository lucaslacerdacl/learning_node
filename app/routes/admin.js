var adminRoutes = function(app){
	app.get('/admin', function(request, response){
		response.render('admin/form_add_notice');
	});

	app.post('/admin/save', function(request, response){
		var connection = app.config.dbConnection();
		var newsModel = app.app.models.newsModel();

		newsModel.addNotice(request.body, connection, function(error, result){
			response.redirect('/news');
		});

	});
}

module.exports = adminRoutes;