(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController',SignupController);

    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
        var $ctrl = this;
        $ctrl.user = {};
        $ctrl.favoritedish = {};

        $ctrl.showmessage = false;
        $ctrl.showerror = false;

        $ctrl.signup = function (form) {
            $ctrl.showmessage = false;
            $ctrl.showerror = false;

            if (form.$invalid) {
                console.log('this form is invalid');
                return;
            };
            MenuService.getFavoriteDish($ctrl.user.favoritedish).then(function (response) {
                $ctrl.user.favoritedishdetails = response.data;
                MenuService.saveUser($ctrl.user);
                $ctrl.showmessage = true;
            }).catch(function (error) {
                console.log(error);
               $ctrl.showerror = true; 
            });

            
        };

    }
})();