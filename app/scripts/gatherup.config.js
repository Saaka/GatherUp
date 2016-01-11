app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/views/main.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'app/views/register.html',
            controller: 'RegisterCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html'
        });
});