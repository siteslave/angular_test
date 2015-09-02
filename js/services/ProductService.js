

angular.module('app.services.ProductService', [])
    .factory('ProductService', function () {

        var products = [
            {id: 1, name: 'AngularJS 2'},
            {id: 2, name: 'Ionic Framework 2'},
            {id: 3, name: 'NodeJS 2'}
        ];

        return {
            getProduct: function () {
                return products;
            },
            name: 'Product'
        }
    });