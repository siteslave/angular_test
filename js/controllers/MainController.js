// Main controller

angular.module('app.controllers.MainController', [
    'app.services.ProductService'
])
    .controller('MainController', function ($scope, ProductService) {
        //
        //$scope.products = [
        //    {id: 1, name: 'Angular'},
        //    {id: 2, name: 'Ionic Framework'},
        //    {id: 3, name: 'NodeJS'}
        //];
        $scope.products = ProductService.getProduct();

        $scope.fruits = [
            {name: 'Apple'},
            {name: 'Orange'},
            {name: 'Banana'}
        ];

        $scope.title = 'Hello';
    });

