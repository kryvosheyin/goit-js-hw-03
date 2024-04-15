const makeArray = (firstArray, secondArray, maxlength) => {
    if (
        !Array.isArray(firstArray) ||
        !Array.isArray(secondArray) ||
        typeof maxlength !== "number"
    ) {
        return "Invalid input";
    }

    if (maxlength < 0) {
        return "Maximum length can not be less than 0";
    }

    const newArray = [...firstArray, ...secondArray];
    if (newArray.length > maxlength) {
        return newArray.slice(0, maxlength);
    }
    return newArray;
};

console.log("OUTPUTS FOR TASK 2");
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log("");
