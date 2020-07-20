(function () {
    'use strict';
    angular.module('MenuApp')
    .controller('itemsController',itemsController);


    itemsController.$inject = ['items','$stateParams'];
    function itemsController(items,$stateParams) {
        var ctrl2 = this;
        ctrl2.items = items.menu_items;
        ctrl2.categoryName = $stateParams.categoryName;
        console.log(ctrl2.items);
    }
})();