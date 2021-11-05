console.log("--- Typescript File ---")

///////// super /////////
class BaseClassWithConstructor {
    private id: number;

    constructor(_id: number) {
        this.id = _id;
    }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
    private name: string;

    constructor(_id: number, _name: string) {
        super(_id);
        this.name = _name;
    }
}

const obj = new DerivedClassWithConstructor(1234, "Alex")

console.log(`obj = ${JSON.stringify(obj, undefined, 2)}`);

////////////////////////////////////////////////////////////////////////


class BaseClassWithFunction {
    public id: number | undefined;

    getProperties(): string {
        return `id: ${this.id}`;
    }
}

class DerivedClassWithFunction extends BaseClassWithFunction {
    public name: string | undefined;

    getProperties(): string {
        return `${super.getProperties()}` + ` , name: ${this.name}`;
    }
}

const derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());