/* global describe, beforeEach, module, inject, it, expect */

"use strict";

describe("imagesApp.requestModule", function () {

    beforeEach(function () {
        module("imagesApp.requestModule", function ($provide) {
            $provide.constant("Constants", {
                restApiRootUrl: "dummy"
            });
        });
    });

    var requestService = null;

    beforeEach(inject(function (_requestService_) {
        requestService = _requestService_;
    }));

    it("should exist", function () {
        expect(requestService)
            .toBeDefined();
    });

    it("should implement API methods", function () {
        expect(requestService.getAngebot)
            .toBeDefined();
        expect(requestService.getTilgungsplan)
            .toBeDefined();
    });

});
