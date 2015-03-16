'use strict';
require.config({
    baseUrl: 'app',

    paths: {
        jquery: ['https://code.jquery.com/jquery-1.11.2.min'],
        angular: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular'],
        ngRoute: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular-route.min'],
        ngBootstrap: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min'],
        app: 'app',
    },

    shim: {
        jquery: { exports: '$' },
        angular: { exports: 'angular' },
        ngRoute: { exports: 'ngRoute', deps: ['angular'] },
        ngBootstrap: { exports: 'ngBootstrap', deps: ['jquery'] }
    }
});

require(
    [
        'app'
    ],
    function () {
        angular.bootstrap(document, ['myApp']);
    }
);
