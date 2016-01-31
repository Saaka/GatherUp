'use strict';

app.controller('RegisterCtrl', ['$scope', '$http', 'registerService', 'toaster', function ($scope, $http, registerService, toaster) {
    $scope.user = {};

    $scope.submit = function () {
//        registerService.registerUser($scope.user)
//            .then(function (res) {
//                toaster.pop('info', 'User registered!', 'Check your email ' + res.user.email + ' for further instructions.', 8000);
//            })
//            .catch(function (err) {
//                toaster.pop('error', 'Registration failed', 'Registration failed for email ' + $scope.user.email, 8000);
//            });
    };
}]);