angular.module('myClothingApp')
    .directive('myFooter', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/footer/footer.html'
        };
    });