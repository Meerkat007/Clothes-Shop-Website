angular.module('myClothingApp')
.directive('myFooter', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/footer/footer.html'
    }
});