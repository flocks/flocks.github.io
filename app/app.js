angular.module('app', []);

angular.module('app')
	.controller('appCtrl', function($scope, cv) {
		$scope.test = "test";

		$scope.cv = angular.copy(cv);
	});