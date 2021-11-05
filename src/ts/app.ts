console.log("--- Typescript File ---")

///////// .... /////////

class ClassUsingProtected {
    protected id: number | undefined;

    public getId() {
        return this.id;
    }
}

class DerivedFromProtected extends ClassUsingProtected {
    constructor() {
        super();
        this.id = 0;
    }
}

const derivedFromProtected = new DerivedFromProtected();
// derivedFromProtected.id = 1; // nope, accessible only inside derived class from the base class or inside the base one
