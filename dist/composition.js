"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// class composition
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.start = function () {
        console.log('engine started');
    };
    return Motor;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new Motor();
    }
    Car.prototype.start = function () {
        this.engine.start();
        setTimeout(function () {
            console.log('car is ready to drive');
        }, 1500);
    };
    return Car;
}());
exports.Car = Car;
var BMW = new Car();
// BMW.start()
// object composition with Object.assign and spread operator
var obj1 = { name: 'Mesrop' };
var obj2 = { lastname: 'Araqelyan' };
// @ts-ignore
var obj = Object.assign({}, obj1, obj2);
console.log(obj);
var es6obj = __assign(__assign({}, obj1), obj2);
console.log(es6obj);
