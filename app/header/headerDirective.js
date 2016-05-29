angular.module('myClothingApp')
    .directive('myHeader', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {},
            controller: 'HeaderController',
            templateUrl: 'app/header/header.html'
            };
        });