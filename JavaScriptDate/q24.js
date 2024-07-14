function removeFalsyValues(array) {
    return array.filter(value => {
        return value !== null && value !== 0 && value !== false && value !== '' && value !== undefined && !Number.isNaN(value);
    });
}

// Example usage
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(removeFalsyValues(sampleArray)); // [15, -22, 47]
