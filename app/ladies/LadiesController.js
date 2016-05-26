angular.module('myClothingApp')
.controller('LadiesController', ['$scope', function ($scope) {
    $scope.categories = [
        'Dresses', 
        'Tops',
        'Skirts'
        ];
    $scope.products = [
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cut-out dress', price: 29.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Sleeveless dress', price: 19.99} 
    ];
}]);