"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("--- Typescript File ---");
function classConstructorDec(constructor) {
    console.log("constructor : " + constructor);
    console.log("constructor.name : " + constructor.name);
    constructor.prototype.testProperty = "testProperty_value";
}
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor() {
    }
    ClassWithConstructor = __decorate([
        classConstructorDec
    ], ClassWithConstructor);
    return ClassWithConstructor;
}());
var classConstrInstance = new ClassWithConstructor();
console.log(classConstrInstance.testProperty);
