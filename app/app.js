'use strict'
define(['angular', 'ngRoute', 'ngBootstrap', 'services/routeResolver'], function (angular, ngRoute, ngBootstrap) {

    var app = angular.module('myApp', [
        // Angular modules
        'ngRoute',

        // Custom modules
        'routeResolverServices'
    ])

    app.config(function ($routeProvider, routeResolverProvider, $controllerProvider, $provide, $filterProvider, $compileProvider) {

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        routeResolverProvider.routeConfig.setBaseDirectories('app/views/', 'app/controllers/');

        var route = routeResolverProvider.route;

        $routeProvider
            .when('/page1', route.resolve('page1'))
            .when('/page2', route.resolve('page2'))
            .otherwise({ redirectTo: '/page1' });
    });

    return app;

});