app.service('registerService', ['$http', '$q', function ($http, $q) {
    
//    var address = 'http://gatherup-saaka.rhcloud.com/';
    var address = 'http://127.0.0.1:8080/';

    this.registerUser = function (user) {
        var methodName = 'testpost';
        var defer = $q.defer();
        $http.post(address + methodName, user)
            .success(function (res) {
                defer.resolve(res.data);
            })
            .error(function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };
}]);