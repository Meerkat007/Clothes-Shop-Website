angular.module('myClothingApp')
.controller('LadiesController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.gender = 'ladies';
    $scope.selectedCategory = $routeParams.category;
    $scope.categories = [
        'Dresses', 
        'Tops',
        'Skirts',
        'Shorts',
        'Swimwear',
        'Trousers',
        'Jeans',
        'Jackets',
        'Shoes'
        ];
    $scope.products = [
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cut-out dress', price: 29.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Sleeveless dress', price: 19.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99}
    ];
}]);