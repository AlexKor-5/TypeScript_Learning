console.log("--- Typescript File ---")

interface MyInterface {
    id: number
    name: string
    surname: string
    age: number
}

interface ImySecond {
    phone: string
    code: number
}


let person: MyInterface = {id: 12, name: "Alex", surname: "Kor", age: 12}
console.log(person);

// const myFun = (a: number, b: number): number => a + b
// const myFun = (a: number, b: number): number => {
//     return a + b
// }

// console.log(myFun(2, 5));

const myObject: MyInterface | ImySecond = {id: 12, name: "Alex", surname: "Kor", age: 12, phone: "586-7656"}

const printNameOrDescription = (value: MyInterface | ImySecond): void => console.log('phone' in value)
printNameOrDescription(myObject)


class SimpleClass {
    id: number | undefined;

    print(): void {
        console.log(`SimpleClass has id : ${this.id}`);
    }
}

const mySimple = new SimpleClass()
mySimple.id = 123
mySimple.print()
console.clear()


class ClassWithConstructor {
    id: number;
    name: string;

    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}

let classWithConstructor = new ClassWithConstructor(1, "name");
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor, undefined, 2)}`);
console.clear()

///////////////////////////////////////
interface IComplexType {
    id: number;
    name: string;

    print(): string;

    usingTheAnyKeyword(arg1: any): any;

    usingOptionalParameters(optionalArg1?: number): void;

    usingDefaultParameters(defaultArg1?: number): void;

    usingRestSyntax(...argArray: number []): void;

    usingFunctionCallbacks(callback: (id: number) => string);
}


class ComplexType implements IComplexType {
    id: number;
    name: string;

    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any) {
        if (typeof idArg === "number")
            this.id = idArg;

        this.name = nameArg;
    }

    print(): string {
        return "id:" + this.id + " name:" + this.name;
    }

    usingTheAnyKeyword(arg1: any): any {
        this.id = arg1;
    }

    usingOptionalParameters(optionalArg1?: number) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }

    usingDefaultParameters(defaultArg1: number = 0) {
        this.id = defaultArg1;
    }

    usingRestSyntax(...argArray: number []) {
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    }

    usingFunctionCallbacks(callback: (id: number) => string) {
        callback(this.id);
    }
}

let ct_1 = new ComplexType(1, "ct_1");
let ct_2 = new ComplexType("abc", "ct_2");

// console.log(`= ${JSON.stringify(ct_2, undefined, 2)}`);
console.log(ct_2.print());

ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({id: 1, name: "string"});
// console.log(` = ${JSON.stringify(ct_1, undefined, 2)}`);

ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();
// console.log(` = ${JSON.stringify(ct_1, undefined, 2)}`);

ct_1.usingRestSyntax(1, 2, 3);
ct_2.usingRestSyntax(1, 2, 3, 4, 5);
console.log(`ct_1 = ${JSON.stringify(ct_1, undefined, 2)}`);
console.log(`ct_2 = ${JSON.stringify(ct_2, undefined, 2)}`);

const myCallbackFunction = (id: number): string => id.toString()
ct_1.usingFunctionCallbacks(myCallbackFunction);
console.log(` = ${JSON.stringify(ct_1, undefined, 2)}`);
console.clear()

///////////////////////////////////////

class ClassWithPublicProperty {
    public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

// console.log(`publicAccess = ${JSON.stringify(publicAccess, undefined, 2)}`);

class classWithAutomaticProperties {
    constructor(
        public id: number,
        private name: string) {
    }
}

let myAutoClass = new classWithAutomaticProperties(1, "className");

// console.log(`myAutoClass = ${JSON.stringify(myAutoClass, undefined, 2)}`);

class StaticProperty {
    static count = 0;
    public name: string = "Mike"

    updateCount() {
        StaticProperty.count++;
    }

    static printToConsole(): void {
        console.log("Hello console from print method")
    }
}

const obj = new StaticProperty()
// console.log(`obj = ${JSON.stringify(obj, undefined, 2)}`);
obj.updateCount()


////////////// Namespaces /////////
namespace FirstNameSpace {
    class NotExported {
    }

    export class NameSpaceClass {
        constructor(
            public id: number | undefined) {
        }
    }

    const something = new NotExported() // possible only here because of absence of export in class defining
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass(1234);
console.log(`firstNameSpace = ${JSON.stringify(firstNameSpace, undefined, 2)}`);


namespace SecondNameSpace {
    export class NameSpaceClass {
        constructor(
            public name: string | undefined) {
        }
    }
}

const secondNameSpace = new SecondNameSpace.NameSpaceClass("Alex")
console.log(`secondNameSpace = ${JSON.stringify(secondNameSpace, undefined, 2)}`);