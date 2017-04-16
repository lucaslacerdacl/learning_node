var homeController = function(app){

	this.home = function(request, response){
		response.render('home/index');
	}

	return this;
}

module.exports = homeController;