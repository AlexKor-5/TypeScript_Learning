class Concatenator<T> {
    concatenateArray(inputArray: Array<T>): string {
        let returnString = "";
        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0) returnString += ",";
            returnString += inputArray[i];
        }
        return returnString;
    }
}

const stringConcat = new Concatenator<string>();
const numberConcat = new Concatenator<number>();

console.log(stringConcat.concatenateArray(["a", "bbb", "ccccc"]));
console.log(numberConcat.concatenateArray([2, 4, 67]));