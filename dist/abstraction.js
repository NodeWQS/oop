"use strict";
// Abstraction is paradigm of oop.With this paradigm we can create class by thing
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, lastname, passport) {
        this.name = name;
        this.lastname = lastname;
        this.passport = passport;
    }
    Person.prototype.walking = function () {
        console.log('go go go!');
    };
    return Person;
}());
exports.Person = Person;
var Max = new Person('Max', 'Jhonson', 122121);
