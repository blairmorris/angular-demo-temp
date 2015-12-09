'use strict';

angular.module('iqApp')
	.controller('MainCtrl',  function ($scope, $http, actors, directors, relations, movies) {
		$scope.actors = actors;
		$scope.directors = directors;
		$scope.movies = movies;
		$scope.itemType = 'actor';

		$scope.setActor = function(actor){
			actor = actor || actors[0];
			var movieIds = _.pick(_.findWhere(relations, {actorID:actor.id}), 'movieID');
			actor.movies = _.map(movieIds, function(id){
				return _.findWhere(movies, {id:id});
			});
			$scope.selected = actor;
		};
		$scope.setActor(actors[0]);

		$scope.setDirector = function(director){
			director.movies = _.where(movies, {directorID: _.parseInt(director.id)});
			$scope.selected = director;
		};

		$scope.setMovie = function(movie){
			var pad = function pad(num, size){ return ('000000000' + num).substr(-size); };
			movie.actors = _.map(_.pluck(_.where(relations, {movieID: movie.id}), 'actorID'), function(id){return _.findWhere(actors, {id:id});});
			movie.director = _.findWhere(directors, {id: pad(movie.directorID, 10 + movie.directorID.length)});
			$scope.selected = movie;
		};

		$scope.setType = function(type){
			$scope.itemType = type;
		};
	});
