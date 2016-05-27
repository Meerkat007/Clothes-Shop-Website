angular.module('myClothingApp', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainViewController',
                templateUrl: 'app/main_view/mainview.html'
            })
            .when('/ladies', {
                controller: 'LadiesController',
                templateUrl: 'app/product_area/product-main-view.html'
            })
            .when('/men', {
                controller: 'MenController',
                templateUrl: 'app/product_area/product-main-view.html'
            })
            .when('/ladies-category', {
                controller: 'LadiesController',
                templateUrl: 'app/product_area/product-category.html'
            })
            .when('/men-category', {
                controller: 'MenController',
                templateUrl: 'app/product_area/product-category.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
}]);
    