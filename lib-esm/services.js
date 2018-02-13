import { ng as angular } from './angular';
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
export { FooService };
var mod_main = angular.module('babel-oneservice', []);
mod_main.service('FooService', FooService);
//# sourceMappingURL=services.js.map