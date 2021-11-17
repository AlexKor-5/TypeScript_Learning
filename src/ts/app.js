"use strict";
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i];
        }
        return returnString;
    };
    return Concatenator;
}());
var stringConcat = new Concatenator();
var numberConcat = new Concatenator();
console.log(stringConcat.concatenateArray(["a", "bbb", "ccccc"]));
console.log(numberConcat.concatenateArray([2, 4, 67]));
