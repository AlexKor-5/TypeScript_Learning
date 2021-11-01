console.log("--- Typescript File ---")
const printSurname = function (sur: string): string {
    return sur
}

const myFun = (name: string, callback: () => string): void => {
    console.log(name)
    console.log(callback())
}

// myFun("Alex", () => printSurname("Kor"))

myFun("Alex", () => printSurname("Kor"))