

angular.module('app.services.ProductService', [])
    .factory('ProductService', function ($q, $http) {

        var products = [
            {id: 1, name: 'AngularJS 2'},
            {id: 2, name: 'Ionic Framework 2'},
            {id: 3, name: 'NodeJS 2'}
        ];

        return {
            getProduct: function () {
                return products;
            },

            getUsers: function () {
                var q = $q.defer();

                $http({
                    url: 'http://jsonplaceholder.typicode.com/users'
                })
                    .success(function (data) {
                        q.resolve(data);
                    })
                    .error(function (data, status) {
                        q.reject('Connection error: ' + status);
                    });

                return q.promise;
            },
            name: 'Product'
        }
    });