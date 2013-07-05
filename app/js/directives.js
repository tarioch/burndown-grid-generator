/* globals d3 */
angular.module('burndownGridGenerator.directives', [])
	.directive('burndownGrid', [function(){
		'use strict';
		
		var link  = function(scope, element) {
			
			scope.update = function(){
				d3.select(element[0]).select('svg').remove();

				var width = 600;
				var height = 300;
				
				var chart = d3.select(element[0])
					.append('svg:svg')
					.attr('width', width)
					.attr('height', height);
				
				var xAxisScale = d3.scale.linear().
					domain([0, scope.days]).
					range([0, width]);

				var xAxis = d3.svg.axis()
					.scale(xAxisScale)
					.orient('bottom')
					;

				chart.append('g')
					.attr('class', 'x axis')
					.call(xAxis);
			};
			
			scope.$watch('maxHours', scope.update);
			scope.$watch('days', scope.update);
		};
		
		return {
			replace: true,
			restrict: 'E',
			scope: {maxHours: '=', days: '='},
			template: '<div></div>',
			link: link
		};
	}]);
