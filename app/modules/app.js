/* global angular */

"use strict";

// Declare app level module which depends on views, and components
angular.module("imagesApp", [
    "ngRoute",
    "imagesApp.imagesModule",
    "imagesApp.constantsModule"
])
    .config([
        "$locationProvider",
        "$routeProvider",
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider.otherwise({
                redirectTo: "/formular"
            });
        }
    ]);
