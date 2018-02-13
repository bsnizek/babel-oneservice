/**
 * Main entry point for angular 1.x build
 * @module ng1
 */ /** */


import { ng as angular } from './angular';
import {FooService} from "./services";

const module = angular.module('babel-oneservice', []);
module.service('FooService', FooService);

export default "babel-oneservice";