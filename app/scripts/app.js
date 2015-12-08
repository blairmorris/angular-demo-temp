'use strict';

angular
	.module('iqApp', [
		'ngAnimate',
		'ngRoute',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main',
				resolve: {
					actors: function(dataService){
						return dataService.getActors();
					},
					directors: function(dataService){
						return dataService.getDirectors();
					},
					movies: function(dataService){
						return dataService.getMovies();
					},
					relations: function(dataService){
						return dataService.getRelations();
					}
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	});
