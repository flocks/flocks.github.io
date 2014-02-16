angular.module('app')
	.directive('planete', function() {
		return {
			restict: 'A',
			require: '^?circularcv',
			templateUrl: "app/directives/planete.tpl.html",
			scope: {
				item : '='
			},
			replace:true,
			link: function(scope, element, attrs, galaxyCtrl) {


				element.bind('click', function() {
					var width = element.width();
					var v = galaxyCtrl.getVector(width, scope.item.id);
					console.log(v);
					element.css({
						"-webkit-transform": "translate("+v+"px, 400px)"
					});
				});


			}
		}
	});