/* global angular */

"use strict";

angular.module("imagesApp.imagesModule")
    .directive("imagesRechner", function () {
        return {
            scope: {
                /* tag attribute */
                laufzeit: "@laufzeit"
            },
            templateUrl: "modules/images/images.html",
            restrict: "E"
        };
    });
