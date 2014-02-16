angular.module('app')
	.directive('circularcv', function() {
		return {
			restrict: 'E',
			scope :{
				cv : '='
			},
			templateUrl: "app/directives/circular.tpl.html",
			replace:true,
			controller: function($scope, $element) {
				this.getVector = function(width, id) {
					var nbPlanetes = $scope.cv.length;
					var galaxyWidth = (nbPlanetes * (width+20)) - 20;
					var findIndex = _.findIndex($scope.cv, {id : id});
					var middle = Math.ceil(nbPlanetes / 2);
					
					return (middle - (findIndex+1)) * 100;
				};
			},
			link: function(scope, element, attrs) {
				

			}
		}
	});