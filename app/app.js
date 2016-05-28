angular.module('myClothingApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        'use strict';
        
        $routeProvider
            .when('/', {
                controller: 'MainViewController',
                templateUrl: 'app/main_view/mainview.html'
            })
            .when('/category-list/:gender', {
                controller: 'CategoryListController',
                templateUrl: 'app/product/product-category.html'
            })
            .when('/:gender/:category', {
                controller: 'ProductController',
                templateUrl: 'app/product/product-main-view.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
    