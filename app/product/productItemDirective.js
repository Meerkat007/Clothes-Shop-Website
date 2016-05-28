angular.module('myClothingApp')
.directive('productItemDirective', function(){
    return {
      restrict: 'E',
      scope: {
          input: '=',
          gender: '=',
          category: '='
      },
      templateUrl: 'app/product/product-item.html'  
    };
});