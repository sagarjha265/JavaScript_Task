function removeArrayElement(array, element) {
    return array.filter(item => item !== element);
}

// Example usage
console.log(removeArrayElement([2, 5, 9, 6], 5)); // [2, 9, 6]
