'use strict';

app.controller('RegisterCtrl', ['$scope', '$http', 'registerService', 'toaster', function ($scope, $http, registerService, toaster) {
    $scope.user = {};

    $scope.submit = function () {
        toaster.pop('info', 'User registered!', 'Check your email ' + $scope.user.email + ' for further instructions.', 8000);
        //alert('success', 'User registered!', 'Check your email ' + $scope.user.email + ' for further instructions', 4000);
        //registerService.registerUser($scope.user);
    };
}]);