/* globals d3 */
angular.module('burndownGridGenerator.directives', [])
	.directive('burndownGrid', [function(){
		'use strict';
		
		var link  = function(scope, element) {
			
			scope.update = function(){
				d3.select(element[0]).select('svg').remove();
				
				var chart = d3.select(element[0])
					.append('svg:svg')
					.attr('width', 400)
					.attr('height', 300);
	
				chart.append('svg:rect')
					.attr('x', 100)
					.attr('y', 100)
					.attr('height', 100)
					.attr('width', 10 * scope.days);
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
