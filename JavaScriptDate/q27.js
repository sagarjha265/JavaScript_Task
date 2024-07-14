function retrieveProperty(array, property) {
    return array.map(item => item[property]).filter(value => value !== undefined);
}

// Example usage
const sampleArray = [
    { id: 1, value: 15 },
    { id: 2, value: -22 },
    { id: 3, value: 47 },
    { id: 4 } // No value property
];
console.log(retrieveProperty(sampleArray, 'value')); // [15, -22, 47]
