/* global ChartCtrl */
describe('Burndown Grid Generator controllers', function() {
	'use strict';
	
	describe('ChartCtrl', function() {
		it('should set maxHours and days', function() {
			var scope = {};
			var ctrl = new ChartCtrl(scope);

			expect(ctrl).not.toBe(null);
			expect(scope.maxHours).toBe(123);
			expect(scope.days).toBe(10);
		});
	});
});