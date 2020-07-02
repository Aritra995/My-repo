(function () {
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    //Controller1
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        buy.items = ShoppingListCheckOffService.getItems();
        buy.remove = function (itemindex) {
          ShoppingListCheckOffService.removeItems(itemindex);
        };

    }
    
    //Controller2
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.boughtItems();
    }

    //Service function
    function ShoppingListCheckOffService() {
        var service = this;
        var items = [
          {
            name: "Milk",
            quantity: "2"
          },
          {
            name: "Donuts",
            quantity: "200"
          },
          {
            name: "Cookies",
            quantity: "300"
          },
          {
            name: "Chocolate",
            quantity: "5"
          },
          {
            name: "Pizza",
            quantity: "4"
          }
        ];
        service.getItems = function () {
          return items; 
        }
        var itemsbought = [];

        service.removeItems = function (itemindex) {
          var bought = items[itemindex];
          items.splice(itemindex,1);
          itemsbought.push(bought);
        }

        service.boughtItems = function () {
          return itemsbought;
        }
    }
})();
