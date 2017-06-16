/*global angular*/

"use strict";

angular.module("imagesApp.imagesModule")

	.controller("imagesController", [
		"$scope",
		"$sce",
		function ($scope, $sce) {
			$scope.sce = $sce;
			$scope.laufzeit = 12;

			$scope.AbsoluteImageUrl = "https://angularjs.org/img/AngularJS-large.png";
			$scope.ImageFileName = "AngularJS-large.png";
		}
	]);
