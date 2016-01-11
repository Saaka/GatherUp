'use strict';

app.controller('RegisterCtrl', ['$scope', '$http', 'registerService', 'alert', function ($scope, $http, registerService, alert) {
    $scope.user = {};
    
    $scope.submit = function () {
        alert('success', 'User registered!', 'Check your email ' + $scope.user.email + ' for further instructions', 4000);
        //registerService.registerUser($scope.user);
    };
}]);