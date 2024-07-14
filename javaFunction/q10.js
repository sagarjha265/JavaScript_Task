function getType(value) {
    return typeof value;
}


console.log(getType(42));              // "number"
console.log(getType("Hello"));         // "string"
console.log(getType(true));            // "boolean"
console.log(getType(undefined));       // "undefined"
console.log(getType({}));              // "object"
console.log(getType([]));              // "object" (arrays are also objects)
console.log(getType(function() {}));   // "function"
