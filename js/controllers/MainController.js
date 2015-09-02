// Main controller

angular.module('app.controllers.MainController', [
    'app.services.ProductService'
])
    .controller('MainController', function ($scope, ProductService) {

        $scope.products = ProductService.getProduct();

        $scope.users = [];

        ProductService.getUsers()
            .then(function (users) {
                $scope.users = users;
            }, function (err) {
                console.log(err);
            });


        $scope.fruits = [
            {name: 'Apple'},
            {name: 'Orange'},
            {name: 'Banana'}
        ];

        $scope.title = 'Hello';
    });

