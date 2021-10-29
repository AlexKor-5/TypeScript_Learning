var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (divId, text) {
        var el = document.getElementById(divId);
        if (el) {
            el.innerText = text;
        }
    };
    return MyClass;
}());
window.onload = function () {
    var myClass = new MyClass();
    myClass.render("content", "Hello World");
    console.log("test");
};
function cul(a, b, c) {
    return a + b + c;
}
// console.log(cul(1, 2, 3));
var complexType = { name: "myName", id: 1 };
complexType = { name: "Alex", id: 2 };
//# sourceMappingURL=app.js.map