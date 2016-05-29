angular.module('myClothingApp')
    .directive('breadcrumbDirective', function() {
       'use strict';
       
       return {
           restrict: 'E',
           scope: {
               gender: '=',
               category: '=',
               location: '='
           },
           templateUrl: 'app/product/breadcrumb.html'
       } 
    });