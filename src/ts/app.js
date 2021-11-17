"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("--- Typescript File ---");
function auditLogDec(target, methodName, descriptor) {
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("auditLogDec : overide of " + methodName + " called");
        for (var i = 0; i < arguments.length; i++) {
            console.log("arg : " + i + " = " + arguments[i]);
        }
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
var ClassWithAuditDec = /** @class */ (function () {
    function ClassWithAuditDec() {
    }
    ClassWithAuditDec.prototype.print = function (arg1, arg2) {
        console.log("ClassWithMethodDec.print"
            + ("(" + arg1 + ", " + arg2 + ") called."));
    };
    __decorate([
        auditLogDec,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ClassWithAuditDec.prototype, "print", null);
    return ClassWithAuditDec;
}());
var auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");
