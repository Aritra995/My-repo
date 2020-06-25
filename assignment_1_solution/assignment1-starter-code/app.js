(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('AppController',appcomponent);
    AppController.$inject = ['$scope'];

    function appcomponent($scope) {
      $scope.dishes = "";
      $scope.message = "";
      $scope.checked = "";  
      $scope.dishChecker = function () {
          if ($scope.dishes.trim().length === 0) {
              $scope.empty = true;
          }else{
              $scope.empty = false;
              $scope.checked = true;
              var dishesArray = $scope.dishes.split(',');
              //Empty item is not considered as an item towards count.
              if (dishesArray.length <= 3) {
                  $scope.message = "Enjoy!";
              }else{
                $scope.message = "Too much!";
              }
          }
      };
    };
})();