angular.module('app')
	.directive('circularcv', function() {
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				console.log("circularCV");
			}
		}
	});