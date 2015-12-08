'use strict';

angular.module('iqApp')
	.service('dataService', function ($q, $http) {
		return {
			getActors : function(){
				var deferred = $q.defer();
				$http.get('data/actors.json')
					.then(function(res){
						deferred.resolve(res.data);
					});
				return deferred.promise;
			},
			getDirectors : function(){
				var deferred = $q.defer();
				$http.get('data/directors.json')
					.then(function(res){
						deferred.resolve(res.data);
					});
				return deferred.promise;
			},
			getMovies : function(){
				var deferred = $q.defer();
				$http.get('data/movies.json')
					.then(function(res){
						deferred.resolve(res.data);
					});
				return deferred.promise;
			},
			getRelations : function(){
				var deferred = $q.defer();
				$http.get('data/linkActorsToMovies.json')
					.then(function(res){
						deferred.resolve(res.data);
					});
				return deferred.promise;
			}
		};
	});
