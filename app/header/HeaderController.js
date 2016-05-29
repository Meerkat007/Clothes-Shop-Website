angular.module('myClothingApp')
    .controller('HeaderController',['$scope', 'productService', function($scope, productService){
        'use strict';
        
        $scope.ladiesCategories = productService.getCategories('ladies');
        $scope.menCategories = productService.getCategories('men');
        $scope.kidsCategories = productService.getCategories('kids');
    }]);