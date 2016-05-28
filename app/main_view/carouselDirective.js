angular.module('myClothingApp')
    .directive('carouselDirective', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/main_view/carouselDirective.html'
        };
    });