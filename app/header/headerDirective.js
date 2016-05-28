angular.module('myClothingApp')
    .directive('myHeader', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/header/header.html'
            };
        });