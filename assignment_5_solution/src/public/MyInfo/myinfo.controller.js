(function () {
    'use strict';
     angular.module('public')
     .controller('MyInfoController',MyInfoController);

     MyInfoController.$inject = ['MenuService','ApiPath'];
     function MyInfoController(MenuService,ApiPath) {
         var $ctrl = this;
         $ctrl.signedup = false;
         $ctrl.ApiPath = ApiPath;

         $ctrl.user = MenuService.getUser();
        //  console.log($ctrl.user);

         if (angular.equals($ctrl.user, {})) {
             $ctrl.signedup = false;
         } else {
             $ctrl.signedup = true;
         }
    }
})();