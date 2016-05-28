angular.module('myClothingApp')
    .controller('ProductController', ['$scope', '$routeParams', 'productService', 'nameService', function($scope, $routeParams, productService, nameService){
        'use strict';

        $scope.gender = $routeParams.gender;
        $scope.categories = productService.getCategories($scope.gender);
        
        $scope.selectedCategory = nameService.findName($scope.categories, $routeParams.category);
        $scope.products = productService.getProductListing($scope.gender);
    }]);