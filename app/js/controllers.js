angular.module('burndownGridGenerator.controllers', [])
	.controller('ChartCtrl', ['$scope', function($scope){
		'use strict';
		$scope.maxHours = 123;
		$scope.days = 10;
	}]);
