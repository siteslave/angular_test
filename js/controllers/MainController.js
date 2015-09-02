// Main controller

angular.module('app.controllers.MainController', [])
    .controller('MainController', function ($scope) {
        $scope.products = [
            {id: 1, name: 'Angular'},
            {id: 2, name: 'Ionic Framework'},
            {id: 3, name: 'NodeJS'}
        ];
    });

