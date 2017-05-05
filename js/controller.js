require.config({
    baseUrl: '../',
    waitSeconds: 20,
    paths: {
        jquery: '/js/jquery-3.2.1.min',
        angular: '/js/angular.min'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
});

require(['angular'], function (angular) {
    angular.element().ready(function () {

        angular.module('homeApp', ['ngRoute'])
            .controller('homeCtrl', function ($scope) {
                $scope.titulo = 'Home';
        });

    })
});

