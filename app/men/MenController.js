'use restrict'

angular.module('myClothingApp')
.controller('MenController', ['$scope', '$routeParams', 'nameService', function($scope, $routeParams, nameService) {
    $scope.gender = 'men';
   
    $scope.categories = [
        {name: 'T-shirts', link: 'T-shirts'}, 
        {name: 'Hoodies', link: 'Hoodies'},
        {name: 'Sweaters', link: 'Sweaters'},
        {name: 'Shorts', link: 'Shorts'},
        {name: 'Swimwear', link: 'Swimwear'},
        {name: 'Trousers', link: 'Trousers'},
        {name: 'Jeans', link: 'Jeans'},
        {name: 'Jackets', link: 'Jackets'},
        {name: 'Shoes', link: 'Shoes'}
    ];
    
    $scope.selectedCategory = nameService.findName($scope.categories, $routeParams.category);
   
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