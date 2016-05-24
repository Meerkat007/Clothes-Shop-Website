angular.module('myClothingApp')
.directive('myHeader', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/header/header.html'
        };
});