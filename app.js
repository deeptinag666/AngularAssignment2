(function () {
'use strict';

angular.module('lunchApp', [])
.controller('lunchAppController', lunchAppController);

lunchAppController.$inject = ['$scope'];

function lunchAppController(scope) {
		scope.lunch = "";
		scope.lunchText = "";

		scope.getLunchText = function(){
			if(scope.lunch == ""){
				scope.lunchText = "Please enter data";
				return;
			}

			var food = [];
			food = scope.lunch.split(",");

			if(food.length > 0){
				if(food.length <= 3){
					scope.lunchText = "Enjoy!";
				} else if(food.length > 3){
					scope.lunchText = "Too much!";
				} else{
					scope.lunchText = "Check the date you have entered";
				}
			}
		};
	}
})();