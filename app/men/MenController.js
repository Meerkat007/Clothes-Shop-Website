'use restrict'

angular.module('myClothingApp')
.controller('MenController', ['$scope', function($scope) {
    $scope.categories = [
        'T-shirts',
        'Hoodies',
        'Sweaters',
        'Shorts',
        'Swimwear',
        'Trousers',
        'Jeans',
        'Jackets',
        'Shoes'
    ];
}]);