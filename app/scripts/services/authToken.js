app.factory('authToken', ['$window', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var isAuth;
    var getTokenFromStorage = function () {
        if (!cachedToken)
            cachedToken = storage.getItem('userToken');

        return cachedToken;
    };

    return {
        setToken: function (token) {
            cachedToken = token;
            storage.setItem('userToken', token);
        },
        getToken: getTokenFromStorage,
        isAuthenticated: function () {
            isAuth = !!this.getToken();
            return isAuth;
        },
        isAuth: isAuth
    };
}]);