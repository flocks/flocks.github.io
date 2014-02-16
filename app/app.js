angular.module('app', []);

angular.module('app')
	.controller('appCtrl', function($scope, cv) {
		$scope.cv = angular.copy(cv);

		$scope.test = {
			"id": 1,
			"name": "Skills",
			"satellites" : [{
				"id": 1,
				"title": "AngularJS",
				"desc": "I've been working with angularJS for almost 2 years now"
			},{
				"id": 2,
				"title": "css",
				"desc": "I'm not a designer nor an integrator. However I do my best to keep me updated about css technologies"
			},{
				"id": 3,
				"title": "NodeJS"
			}, {
				"id": 4,
				"title": "Testing",
				"desc" : "I test my code with Jasmine through Karma"
			},{
				"id": 5,
				"title": "GruntJS"
			},{
				"id": 6, 
				"title": "BackboneJS"
			}]
		}
	});