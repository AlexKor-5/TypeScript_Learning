console.log("--- Typescript File ---")

type callbackString = () => string
function printt(name: string, addToPrint: callbackString): void {
    console.log(`${name}`);
    console.log(addToPrint());
}

function addToPrint(myString: string): string {
    return myString
}

printt("Alex", () => addToPrint("Mob"))

