describe('Burndown Grid Generator controllers', function() {
	'use strict';
	
	beforeEach(module('burndownGridGenerator.controllers'));
	
	describe('ChartCtrl', function() {
		it('should set maxHours and days', inject(function($controller) {
			var scope = {};
			var ctrl = $controller('ChartCtrl', {$scope: scope});

			expect(ctrl).not.toBe(null);
			expect(scope.maxHours).toBe(123);
			expect(scope.days).toBe(10);
		}));
	});
});