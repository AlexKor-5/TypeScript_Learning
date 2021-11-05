console.log("--- Typescript File ---");
var person = { id: 12, name: "Alex", surname: "Kor", age: 12 };
console.log(person);
// const myFun = (a: number, b: number): number => a + b
// const myFun = (a: number, b: number): number => {
//     return a + b
// }
// console.log(myFun(2, 5));
var myObject = { id: 12, name: "Alex", surname: "Kor", age: 12, phone: "586-7656" };
var printNameOrDescription = function (value) { return console.log('phone' in value); };
printNameOrDescription(myObject);
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass has id : " + this.id);
    };
    return SimpleClass;
}());
var mySimple = new SimpleClass();
mySimple.id = 123;
mySimple.print();
console.clear();
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(1, "name");
console.log("classWithConstructor = " + JSON.stringify(classWithConstructor, undefined, 2));
console.clear();
var ComplexType = /** @class */ (function () {
    function ComplexType(idArg, nameArg) {
        if (typeof idArg === "number")
            this.id = idArg;
        this.name = nameArg;
    }
    ComplexType.prototype.print = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    ComplexType.prototype.usingOptionalParameters = function (optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    };
    ComplexType.prototype.usingDefaultParameters = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingFunctionCallbacks = function (callback) {
        callback(this.id);
    };
    return ComplexType;
}());
var ct_1 = new ComplexType(1, "ct_1");
var ct_2 = new ComplexType("abc", "ct_2");
// console.log(`= ${JSON.stringify(ct_2, undefined, 2)}`);
console.log(ct_2.print());
ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({ id: 1, name: "string" });
// console.log(` = ${JSON.stringify(ct_1, undefined, 2)}`);
ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();
// console.log(` = ${JSON.stringify(ct_1, undefined, 2)}`);
ct_1.usingRestSyntax(1, 2, 3);
ct_2.usingRestSyntax(1, 2, 3, 4, 5);
console.log("ct_1 = " + JSON.stringify(ct_1, undefined, 2));
console.log("ct_2 = " + JSON.stringify(ct_2, undefined, 2));
var myCallbackFunction = function (id) { return id.toString(); };
ct_1.usingFunctionCallbacks(myCallbackFunction);
console.log(" = " + JSON.stringify(ct_1, undefined, 2));
console.clear();
///////////////////////////////////////
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
// console.log(`publicAccess = ${JSON.stringify(publicAccess, undefined, 2)}`);
var classWithAutomaticProperties = /** @class */ (function () {
    function classWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    return classWithAutomaticProperties;
}());
var myAutoClass = new classWithAutomaticProperties(1, "className");
// console.log(`myAutoClass = ${JSON.stringify(myAutoClass, undefined, 2)}`);
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
        this.name = "Mike";
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.printToConsole = function () {
        console.log("Hello console from print method");
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var obj = new StaticProperty();
// console.log(`obj = ${JSON.stringify(obj, undefined, 2)}`);
obj.updateCount();
////////////// Namespaces /////////
var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass(id) {
            this.id = id;
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    var something = new NotExported(); // possible only here because of absence of export in class defining
})(FirstNameSpace || (FirstNameSpace = {}));
var firstNameSpace = new FirstNameSpace.NameSpaceClass(1234);
console.log("firstNameSpace = " + JSON.stringify(firstNameSpace, undefined, 2));
var SecondNameSpace;
(function (SecondNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass(name) {
            this.name = name;
        }
        return NameSpaceClass;
    }());
    SecondNameSpace.NameSpaceClass = NameSpaceClass;
})(SecondNameSpace || (SecondNameSpace = {}));
var secondNameSpace = new SecondNameSpace.NameSpaceClass("Alex");
console.log("secondNameSpace = " + JSON.stringify(secondNameSpace, undefined, 2));
//# sourceMappingURL=app.js.map