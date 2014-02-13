angular.module('app')
	.directive('circularcv', function() {
		return {
			restrict: 'E',
			scope :{
				cv : '='
			},
			link: function(scope, element, attrs) {
				console.log("circularCV");
			}
		}
	});