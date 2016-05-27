angular.module('myClothingApp')
.directive('productItemDirective', function(){
    return {
      restrict: 'E',
      scope: {
          input: '=',
          gender: '=',
          category: '='
      },
      templateUrl: 'app/product_area/product-item.html'  
    };
});