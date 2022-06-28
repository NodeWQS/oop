"use strict";
// Encapsulation is paradigm of oop.With this paradigm we can combine properties and methods in one object
// Hidding is proccess when we can create private or public properties or methods.
// In typescript have 4 access modifers (protected,public,private,readonly)
var System = /** @class */ (function () {
    function System(_path) {
        this._path = _path;
    }
    System.prototype.rename = function (filename) {
        setTimeout(function () {
            console.log("file renamed " + filename);
        }, 1000);
    };
    System.prototype.delete = function () {
        setTimeout(function () {
            console.log('file deleted successfully');
        }, 2000);
    };
    Object.defineProperty(System.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    return System;
}());
var file = new System('./tsconfig.json');
console.log(file.path);
file.rename('config.json');
