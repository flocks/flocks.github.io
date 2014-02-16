angular.module('app', []);

angular.module('app')
	.controller('appCtrl', function($scope, cv) {
		$scope.cv = angular.copy(cv);
	});