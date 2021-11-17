console.log("--- Typescript File ---")

function auditLogDec(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    const originalFunction = target[methodName];
    const auditFunction = function (this: any) {
        console.log(`auditLogDec : overide of ${methodName} called`);
        for (let i = 0; i < arguments.length; i++) {
            console.log(`arg : ${i} = ${arguments[i]}`);
        }
        originalFunction.apply(this, arguments);
    }
    target[methodName] = auditFunction;
    return target;
}

class ClassWithAuditDec {
    @auditLogDec print(arg1: string, arg2: string) {
        console.log(`ClassWithMethodDec.print`
            + `(${arg1}, ${arg2}) called.`);
    }
}

let auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");