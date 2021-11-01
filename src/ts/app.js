console.log("--- Typescript File ---");
var printSurname = function (sur) {
    return sur;
};
var myFun = function (name, callback) {
    console.log(name);
    console.log(callback());
};
// myFun("Alex", () => printSurname("Kor"))
myFun("Alex", function () { return printSurname("Kor"); });
//# sourceMappingURL=app.js.map