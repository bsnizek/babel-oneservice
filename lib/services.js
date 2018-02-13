"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("./angular");
/**
 * This service emulates an Authentication Service.
 */
var FooService = /** @class */ (function () {
    function FooService() {
        console.log("FooFoo");
    }
    FooService.prototype.getFoo = function () {
        return "foo";
    };
    return FooService;
}());
exports.FooService = FooService;
var mod_main = angular_1.ng.module('babel-oneservice', []);
mod_main.service('FooService', FooService);
//# sourceMappingURL=services.js.map