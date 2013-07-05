/* globals d3 */
angular.module('burndownGridGenerator.directives', [])
	.directive('burndownGrid', [function(){
		'use strict';
		
//		var link  = function(scope, element, attrs, ctrl) {
		var link  = function(scope, element) {
			var chart = d3.select(element[0])
				.append('svg:svg')
				.attr('width', 400)
				.attr('height', 300);

			chart.append('svg:rect')
				.attr('x', 100)
				.attr('y', 100)
				.attr('height', 100)
				.attr('width', 200);
		};
		
		return {
			replace: true,
			restrict: 'E',
			scope: {data: '=', options: '='},
			template: '<div></div>',
			link: link
		};
	}]);
