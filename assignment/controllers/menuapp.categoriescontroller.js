(function () {
    'use strict';
    angular.module('MenuApp')
    .controller('categoriesController',categoriesController);


    categoriesController.$inject = ['MenuDataService','categories'];
    function categoriesController(MenuDataService,categories) {
        var ctrl1 = this;
        ctrl1.categories = categories;
    }
})();