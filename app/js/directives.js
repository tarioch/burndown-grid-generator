/* globals d3 */
angular.module('burndownGridGenerator.directives', [])
	.directive('burndownGrid', [function(){
		'use strict';
		
		var link  = function(scope, element) {
			
			scope.update = function(){
				d3.select(element[0]).select('svg').remove();

				var width = 600;
				var height = 300;
				var padding = 80;
				
				var chart = d3.select(element[0])
					.append('svg:svg')
					.attr('width', width + padding)
					.attr('height', height + padding);
				
				var xAxisScale = d3.scale.linear()
					.domain([0, scope.days])
					.range([0, width]);

				var yAxisScale = d3.scale.linear()
					.domain([0, scope.maxHours])
					.range([height, 0]);

				var xAxis = d3.svg.axis()
					.scale(xAxisScale)
					.orient('bottom');
				
				var yAxis = d3.svg.axis()
					.scale(yAxisScale)
					.orient('left');

				chart.append('g')
					.attr('class', 'x axis')
					.attr('transform', 'translate(40, ' + height + ')')
					.call(xAxis);
			
				chart.append('g')
					.attr('class', 'y axis')
					.attr('transform', 'translate(40, 0)')
					.call(yAxis);
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
