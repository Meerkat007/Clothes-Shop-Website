angular.module('myClothingApp')
    .controller('CategoryListController', ['$scope', '$routeParams', 'productService', function($scope, $routeParams, productService){
        'use strict';
        $scope.gender = $routeParams.gender;
        $scope.categories = productService.getCategories($scope.gender);
    }]);