function joinArray(arr, separator = ',') {
    return arr.join(separator);
}

// Sample array
const myColor = ["Red", "Green", "White", "Black"];

// Expected Outputs
console.log(joinArray(myColor)); // Output: "Red,Green,White,Black"
console.log(joinArray(myColor, '+')); // Output: "Red+Green+White+Black"
