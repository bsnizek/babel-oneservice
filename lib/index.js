"use strict";
/**
 * Main entry point for angular 1.x build
 * @module ng1
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("./angular");
var services_1 = require("./services");
var module = angular_1.ng.module('babel-oneservice', []);
module.service('FooService', services_1.FooService);
exports.default = "babel-oneservice";
//# sourceMappingURL=index.js.map