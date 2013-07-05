describe('Burndown Grid Generator controllers', function() {
	'use strict';
	
	describe('ChartCtrl', function() {
		it('should set maxHours and days', function() {
			var scope = {};
			new ChartCtrl(scope);

			expect(scope.maxHours).toBe(123);
			expect(scope.days).toBe(10);
		});
	});
});