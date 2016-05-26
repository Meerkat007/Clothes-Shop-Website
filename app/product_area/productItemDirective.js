angular.module('myClothingApp')
.directive('productItemDirective', function(){
    return {
      restrict: 'E',
      scope: {
          input: '='
      },
      templateUrl: 'app/product_area/product-item.html'  
    };
});