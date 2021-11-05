var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("--- Typescript File ---");
///////// super /////////
var BaseClassWithConstructor = /** @class */ (function () {
    function BaseClassWithConstructor(_id) {
        this.id = _id;
    }
    return BaseClassWithConstructor;
}());
var DerivedClassWithConstructor = /** @class */ (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(_id, _name) {
        var _this = _super.call(this, _id) || this;
        _this.name = _name;
        return _this;
    }
    return DerivedClassWithConstructor;
}(BaseClassWithConstructor));
var obj = new DerivedClassWithConstructor(1234, "Alex");
console.log("obj = " + JSON.stringify(obj, undefined, 2));
////////////////////////////////////////////////////////////////////////
var BaseClassWithFunction = /** @class */ (function () {
    function BaseClassWithFunction() {
    }
    BaseClassWithFunction.prototype.getProperties = function () {
        return "id: " + this.id;
    };
    return BaseClassWithFunction;
}());
var DerivedClassWithFunction = /** @class */ (function (_super) {
    __extends(DerivedClassWithFunction, _super);
    function DerivedClassWithFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassWithFunction.prototype.getProperties = function () {
        return "" + _super.prototype.getProperties.call(this) + (" , name: " + this.name);
    };
    return DerivedClassWithFunction;
}(BaseClassWithFunction));
var derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());
//# sourceMappingURL=app.js.map