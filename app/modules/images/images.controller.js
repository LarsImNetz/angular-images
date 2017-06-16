/*global angular*/

"use strict";

angular.module("imagesApp.imagesModule")

	.controller("imagesController", [
		"$scope",
		"$sce",
		function ($scope, $sce) {
			$scope.sce = $sce;
			$scope.laufzeit = 12;
		}
	]);
