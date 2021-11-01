console.log("--- Typescript File ---");
function printt(name, addToPrint) {
    console.log("" + name);
    console.log(addToPrint());
}
function addToPrint(myString) {
    return myString;
}
printt("Alex", function () { return addToPrint("Mob"); });
//# sourceMappingURL=app.js.map