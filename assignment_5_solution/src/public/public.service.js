(function () {
    'use strict';
    angular.module('public')
    .service('UserInfoSevice',UserInfoSevice);

    function UserInfoSevice() {
        var service = this;
        service.user = {
            firstname : '',
            lastname : '',
            emailid : '',
            phoneno : ''

        };
    }
})();