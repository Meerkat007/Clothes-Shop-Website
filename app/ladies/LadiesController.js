'use restrict'
angular.module('myClothingApp')
.controller('LadiesController', ['$scope', '$routeParams','nameService', function ($scope, $routeParams, nameService) {
    $scope.gender = 'ladies';
    
    $scope.categories = [
        {name: 'Dresses', link: 'dresses'}, 
        {name: 'Tops', link: 'tops'},
        {name: 'Skirts', link: 'skirts'},
        {name: 'Shorts', link: 'shorts'},
        {name: 'Swimwear', link: 'swimwear'},
        {name: 'Trousers', link: 'trousers'},
        {name: 'Jeans', link: 'jeans'},
        {name: 'Jackets', link: 'jackets'},
        {name: 'Shoes', link: 'shoes'}
    ];
    
    $scope.selectedCategory = nameService.findName($scope.categories, $routeParams.category);
    console.log($scope.selectedCategory);
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