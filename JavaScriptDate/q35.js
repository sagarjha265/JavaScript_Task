function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Example usage
console.log(getRandomItem([1, 2, 3, 4, 5])); // Random number from the array
