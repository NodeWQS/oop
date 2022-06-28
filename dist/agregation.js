"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Watch = /** @class */ (function () {
    function Watch() {
    }
    Watch.prototype.wearing = function () {
        console.log('watch weared');
    };
    return Watch;
}());
exports.Watch = Watch;
var Personality = /** @class */ (function () {
    function Personality(watch) {
        this.watch = watch;
    }
    Personality.prototype.goout = function () {
        console.log('clothes weared');
        this.watch.wearing();
    };
    return Personality;
}());
var Max = new Personality(new Watch());
Max.goout();
