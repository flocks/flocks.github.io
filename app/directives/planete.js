angular.module('app')
	.directive('planete', function($compile, $timeout) {
		return {
			restict: 'EA',
			require: '^?circularcv',
			templateUrl: "app/directives/planete.tpl.html",
			scope: {
				item : '='
			},
			replace:true,
			link: function(scope, element, attrs, galaxyCtrl) {
				console.log("lala");
				var _init = function() { 

					scope.shown = false;


				};

				_init();

				var _showSatellites = function() {
					scope.shown = !scope.shown;
				};

				var _hideSatellites = function() {

				};

				scope.hover = function(id) {
					var e = _.find(scope.item.satellites, {id: id});
					scope.info = e.desc;
					console.log(scope.info);
				};

				scope.handleClick = function() {
						scope.shown = true;
						var nbSatellites = scope.item.satellites.length;
						var i = 0;
						var step = 360 / nbSatellites;
						_.each(element.find('.satellite'), function(sat) {

							var degres = (i * step);
							angular.element(sat).css({
								"-webkit-transform": "rotate("+degres+"deg) translate(25em) rotate(-"+degres+"deg)"
							});

							i++;
						});

						var center = element.find('.center')[0];

						angular.element(center).css({
							"-webkit-transform": "scale(0)"
						});

			
				};

	

			}
		}
	});	