'use restrict'

angular.module('myClothingApp')
.controller('MenController', ['$scope', '$routeParams', 'nameService', function($scope, $routeParams, nameService) {
    $scope.gender = 'men';
    
    $scope.categories = [
        {name: 'T-shirts', link: 't-shirts'}, 
        {name: 'Hoodies', link: 'hoodies'},
        {name: 'Sweaters', link: 'sweaters'},
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
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cutton T-shirt', price: 29.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cutton T-shirt', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 19.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99}
    ];
}]);