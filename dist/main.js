"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// In this file I create class using agregation and compostion
var composition_1 = require("./composition");
var agregation_1 = require("./agregation");
var Personality = /** @class */ (function () {
    function Personality(name, lastname, passport, w) {
        this.name = name;
        this.lastname = lastname;
        this._passport = passport;
        this.watch = w;
        this.car = new composition_1.Car();
    }
    return Personality;
}());
var Mesrop = new Personality('Mesrop', 'Araqelyan', 12121, new agregation_1.Watch());
console.log(Mesrop);
