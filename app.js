(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject= ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getItem();
  // console.log(buyList.items);
  // console.log(buyList.items.length);
  buyList.buyItem = function(itemIndex){
    // console.log(buyList.items[itemIndex].name);
    ShoppingListCheckOffService.addItem(buyList.items[itemIndex].name, buyList.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
    // console.log(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.showBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var itemsToBuy = [
    {
      name: "Apple",
      quantity: "4"
    },
    {
      name: "Orange",
      quantity: "3"
    },
    {
      name: "Banana",
      quantity: "5"
    },
    {
      name: "Mango",
      quantity: "6"
    },
    {
      name: "Kiwi",
      quantity: "2"
    }
  ];

  var itemsAlreadyBought = [];

  service.addItem = function(itemName, quantity){
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsAlreadyBought.push(item);
  };

  service.removeItem = function(itemIndex){
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItem = function(){
    return itemsToBuy;
  };

  service.showBoughtItems = function(){
    return itemsAlreadyBought;
  }


}

})();
