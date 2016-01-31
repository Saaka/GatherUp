app.service('registerService', ['$http', '$q', 'authToken', function ($http, $q, authToken) {

    //    var address = 'http://gatherup-saaka.rhcloud.com/';
    var address = 'http://127.0.0.1:8080/';

    this.registerUser = function (user) {
        var methodName = 'testpost';
        var defer = $q.defer();
        $http.post(address + methodName, user)
            .success(function (res) {
                authToken.setToken(res.token);
                defer.resolve(res);
            })
            .error(function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };
}]);