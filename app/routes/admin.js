var adminRoutes = function(app){
	app.get('/admin', function(request, response){
		response.render('admin/form_add_notice');
	});

	app.post('/admin/save', function(request, response){
		var connection = app.config.dbConnection();
		var newsModel = app.app.models.newsModel();

		request.assert('title', 'Título is required').notEmpty();
		request.assert('resume', 'Resume is required').notEmpty();
		request.assert('resume', 'Resume deve conter entre 10 e 100 characters').len(10, 100);
		request.assert('author_name', 'Author is required').notEmpty();
		request.assert('notice_date', 'Notice date is required').notEmpty().isDate({format: 'YYYY-MM-DD'});
		request.assert('notice', 'Notice is required').notEmpty();

		var errors = request.validationErrors();

		if(errors){
			response.render('admin/form_add_notice');
			return;
		}

		newsModel.addNotice(request.body, connection, function(error, result){
			response.redirect('/news');
		});

	});
}

module.exports = adminRoutes;