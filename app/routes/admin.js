var adminRoutes = function(app){
	app.get('/admin', function(request, response){
		response.render('admin/form_add_notice');
	});
}

module.exports = adminRoutes;