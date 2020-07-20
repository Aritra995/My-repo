(function () {
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
        
        .state('home',{
            url : '/home',
            templateUrl : 'template/hometemplate.html'
        })
        .state('category',{
            url : '/categories',
            templateUrl : 'template/categoriestemplate.html',
            controller : 'categoriesController as ctrl1',
            resolve : {
                categories : ['MenuDataService',function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url : '/categories/{categoryShortName}',
            templateUrl : 'template/itemstemplate.html',
            controller : 'itemsController as ctrl2',
            params : {
                categoryShortName : null,
                categoryName : null
            },
            resolve : {
                items : ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
                    return MenuDataService.getItemsforCategory($stateParams.categoryShortName);
                }]
            }
        });

    }
})();