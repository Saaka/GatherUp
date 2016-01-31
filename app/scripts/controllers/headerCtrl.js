'use strict';

app.controller('HeaderCtrl', ['$scope', 'authToken', 'toaster', function ($scope, authToken, toaster) {
    $scope.isAuthenticated = authToken.isAuthenticated();
}]);