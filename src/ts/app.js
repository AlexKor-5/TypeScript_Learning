"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("--- Typescript File ---");
var simpleDecorator = function (constructor) {
    console.log('simpleDecorator called.');
};
function secondDecorator(constructor) {
    console.log('secondDecorator called.');
}
function decoratorFactory(name) {
    return function (constructor) {
        console.log("decorator function called with : " + name);
    };
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator,
        secondDecorator,
        decoratorFactory("Alex")
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
// const instance_1 = new ClassWithSimpleDecorator();
// const instance_2 = new ClassWithSimpleDecorator();
//
// console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
// console.log(`instance_2 : ${JSON.stringify(instance_2)}`);
