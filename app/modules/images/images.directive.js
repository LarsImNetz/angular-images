/* eslint-disable no-negated-condition */
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
	})
	/* Canvas bepinseln */
	.directive("drawing", function () {
		return {
			restrict: "A",
			link: function (scope, element) {
				var ctx = element[0].getContext("2d");

				// variable that decides if something should be drawn on mousemove
				var drawing = false;

				// the last coordinates before the current move
				var lastX = 0;
				var lastY = 0;

				element.bind("mousedown", function (event) {
					if (event.offsetX !== undefined) {
						lastX = event.offsetX;
						lastY = event.offsetY;
					}
					else { // Firefox compatibility
						lastX = event.layerX - event.currentTarget.offsetLeft;
						lastY = event.layerY - event.currentTarget.offsetTop;
					}

					// begins new line
					ctx.beginPath();

					drawing = true;
				});
				element.bind("mousemove", function (event) {
					if (drawing) {
						var currentX = 0;
						var currentY = 0;
						// get current mouse position
						if (event.offsetX !== undefined) {
							currentX = event.offsetX;
							currentY = event.offsetY;
						}
						else {
							currentX = event.layerX - event.currentTarget.offsetLeft;
							currentY = event.layerY - event.currentTarget.offsetTop;
						}

						var draw = function(lX, lY, cX, cY) {
							// line from
							ctx.moveTo(lX, lY);
							// to
							ctx.lineTo(cX, cY);
							// color
							ctx.strokeStyle = "#4bf";
							// draw it
							ctx.stroke();
						};

						draw(lastX, lastY, currentX, currentY);

						// set current coordinates to last one
						lastX = currentX;
						lastY = currentY;
					}

				});
				element.bind("mouseup", function (/* event */) {
					// stop drawing
					drawing = false;
				});

				// canvas reset
				function reset() {
					element[0].width = element[0].width;
				}

			}
		};
	});
