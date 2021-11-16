console.log("--- Typescript File ---")

const simpleDecorator = (constructor: Function) => {
    console.log('simpleDecorator called.');
}

function secondDecorator(constructor: Function) {
    console.log('secondDecorator called.')
}

function decoratorFactory(name: string) {
    return function (constructor: Function) {
        console.log(`decorator function called with : ${name}`);
    }
}

@simpleDecorator
@secondDecorator
@decoratorFactory("Alex")
class ClassWithSimpleDecorator {

}

// const instance_1 = new ClassWithSimpleDecorator();
// const instance_2 = new ClassWithSimpleDecorator();
//
// console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
// console.log(`instance_2 : ${JSON.stringify(instance_2)}`);