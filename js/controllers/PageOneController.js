
angular.module('app.controllers.PageOneController', [])
.controller('PageOneController', function ($scope) {
       $scope.fruits = [
           {name: 'Apple'},
           {name: 'Orange'},
           {name: 'Banana'}
       ];
    });