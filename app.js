(function () {
'use strict';

angular.module('shoppingList', [])
.controller('toBuyController', toBuyController)
.controller('alreadyboughtController', alreadyboughtController)
.service('shoppingListCheckOffService', shoppingListCheckOffService);

toBuyController.$inject = ['$scope', 'shoppingListCheckOffService'];
alreadyboughtController.$inject = ['$scope', 'shoppingListCheckOffService'];

function toBuyController(scope, shoppingListCheckOffService) {
	scope.toBuy = shoppingListCheckOffService.getToBuyList();

	scope.buyItem = function(item){
		shoppingListCheckOffService.addItems(item)
	}

}

function alreadyboughtController(scope, shoppingListCheckOffService) {
	scope.alreadyBought = [];

	scope.alreadyBought = shoppingListCheckOffService.getAlreadyBoughtItems();
}

function shoppingListCheckOffService(){
	var service = this;
	var toBuyItems = [
				{name: "cookies", quantity: 10}, 
				{name: "apples", quantity: 20}, 
				{name: "strawberries", quantity: 10}, 
				{name: "bread", quantity: 5},
				{name: "tomato ketchup", quantity: 2}
			  ];

    var alreadyBoughtItems = [];

	service.getToBuyList = function(){
		return toBuyItems;
	}

	service.getAlreadyBoughtItems = function(){
		return alreadyBoughtItems;
	}

	service.addItems = function(item){
		alreadyBoughtItems.push(item);
	    var index = toBuyItems.indexOf(item);
  		toBuyItems.splice(index, 1);
	}
}

})();