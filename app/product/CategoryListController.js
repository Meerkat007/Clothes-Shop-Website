angular.module('myClothingApp')
.controller('CategoryListController', ['$scope', '$routeParams', 'productService', 'nameService', function($scope, $routeParams, productService, nameService){
    console.log('category list controller called');
    $scope.gender = $routeParams.gender;
    $scope.categories = productService.getCategories($scope.gender);
}]);