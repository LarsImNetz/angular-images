/*global module*/

"use strict";

module.exports.constants = {
    home: {
        restApiRootUrl: "http://localhost:8008/sentences-rest-server/satz/"
    },
    moon: {
        restApiRootUrl: "http://moonserver.homenet.org:8080/sentencesrestbeanserver/satz/"
    },
    local: {
        restApiRootUrl: "http://localhost:8080/sentences-rest-server/satz/"
    },
    qa: {
        restApiRootUrl: "http://qa.relaunch.drklein.hypoport.local/rest-api/tav/"
    },
    production: {
        restApiRootUrl: "tbd."
    }
};
