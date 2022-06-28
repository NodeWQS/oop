"use strict";
//  Polymorphysm is paradigm of rule of polymorphysm is very simple. one model different realisation.
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
var Person = /** @class */ (function () {
    function Person(name, lastname, passport) {
        this.name = name;
        this.lastname = lastname;
        this.passport = passport;
    }
    Person.prototype.doing = function () {
        return 'Now I am doing something.';
    };
    return Person;
}());
var Maxim = new Person('Maxim', 'Ivanov', 'AU231299');
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, lastname, passport, language) {
        var _this = _super.call(this, name, lastname, passport) || this;
        _this.language = language;
        return _this;
    }
    Programmer.prototype.doing = function () {
        return "Now I am coding in " + this.language;
    };
    return Programmer;
}(Person));
var Jhon = new Programmer('Jhon', 'Doe', 'AT122112', 'rust');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, lastname, passport) {
        return _super.call(this, name, lastname, passport) || this;
    }
    Employee.prototype.doing = function () {
        return 'Now I am unloading';
    };
    return Employee;
}(Person));
var Mesrop = new Employee('Mesrop', 'Araqelyan', 'AU112233');
