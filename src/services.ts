import { ng as angular } from './angular';

/**
 * This service emulates an Authentication Service.
 */
 export class FooService {

    constructor() {
        console.log("FooFoo");
    }

    getFoo() {
        return "foo"
    }
}

const mod_main = angular.module('babel-oneservice', []);
mod_main.service ('FooService', FooService);