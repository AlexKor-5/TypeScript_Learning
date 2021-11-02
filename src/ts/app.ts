console.log("--- Typescript File ---")

interface MyInterface {
    id: number
    name: string
    surname: string
    age: number
}

let person: MyInterface = {id: 12, name: "Alex", surname: "Kor", age: 12}
console.log(person);