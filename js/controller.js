var app = angular.module('myApp', []);

app.controller('homeCtrl', function ($scope, $http) {

    $http.get('https://api.github.com/users/gaboso')
        .then(function (response) {
            $scope.baseData =  response.data;
            $scope.$broadcast('LOAD_BASE_DATA');
        });

    $scope.titulo = 'John';

    $scope.$on('LOAD_BASE_DATA', function () {
        $http.get('https://api.github.com/users/Gaboso/repos')
            .then(function (response) {
                $scope.repositories =  response.data;
            });
    })
});