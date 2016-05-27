angular.module('myClothingApp')
.controller('KidsController', ['$scope', '$routeParams', 'nameService', function($scope, $routeParams, nameService) {
    $scope.gender = 'kids';
    $scope.categories = [
        {name: 'Newborn 0-9m', link: 'newborn-0-9m'},
        {name: 'Baby Girl 4m-2y', link: 'baby-Girl-4m-2y'},
        {name: 'Baby Boy 4m-2y', link: 'baby-Boy-4m-2y'},
        {name: 'Girls 18m-10y', link: 'girls-18m-10y'},
        {name: 'Boys 18m-10y', link: 'boys-18m-10y'},
        {name: 'Girls 8-14y+', link: 'girls-8-14y'},
        {name: 'Boys 8-14y+', link: 'boys-8-14y'}
    ];
   
    $scope.selectedCategory = nameService.findName($scope.categories, $routeParams.category);
    
    $scope.products = [
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Workwear romper suit', price: 29.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Workwear romper suit', price: 29.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Jersey shorts', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Jersey shorts', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'sleeveless bodysuits', price: 19.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
       {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
    ];
    
}]);