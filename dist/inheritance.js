"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// inheritance is paradigm of oop with this paradigm we can create class based another class.
// With super method we can inheritanced another class properties.
var abstraction_1 = require("./abstraction");
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, lastname, passport, years, lang) {
        var _this = _super.call(this, name, lastname, passport) || this;
        _this._workingYears = years;
        _this.language = lang;
        return _this;
    }
    Object.defineProperty(Programmer.prototype, "coding", {
        get: function () {
            return "Now I am coding in " + this.language;
        },
        enumerable: true,
        configurable: true
    });
    return Programmer;
}(abstraction_1.Person));
var prog = new Programmer('Max', 'Ivanov', 12211, 3, 'javascript');
console.log(prog.coding);
