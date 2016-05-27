'use restrict'

angular.module('myClothingApp')
.controller('MenController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.gender = 'men';
    $scope.selectedCategory = $routeParams.category;
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