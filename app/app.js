angular.module('myClothingApp', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainViewController',
                templateUrl: 'app/main-view/mainView.html'
            })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
}]);
    