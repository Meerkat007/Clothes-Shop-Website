angular.module('myClothingApp')
.controller('LadiesController', ['$scope', '$routeParams','nameService', function ($scope, $routeParams, nameService) {
    $scope.gender = 'ladies';
    $scope.categories = [
        {name: 'Dresses', link: 'Dresses'}, 
        {name: 'Tops', link: 'Tops'},
        {name: 'Skirts', link: 'Skirts'},
        {name: 'Shorts', link: 'Shorts'},
        {name: 'Swimwear', link: 'Swimwear'},
        {name: 'Trousers', link: 'Trousers'},
        {name: 'Jeans', link: 'Jeans'},
        {name: 'Jackets', link: 'Jackets'},
        {name: 'Shoes', link: 'Shoes'}
    ];
    
    $scope.selectedCategory = nameService.findName($scope.categories, $routeParams.category);
    
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