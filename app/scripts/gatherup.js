var app = angular.module('gatherup', ['ngAnimate', 'toaster']);

app.controller('MainCtrl', ['$scope', '$http', 'toaster', function($scope, $http, toaster) {
    $scope.title = 'GatherUp';
    
}]);