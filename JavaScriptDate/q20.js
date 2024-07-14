function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

// Example usage
const arrayWithDuplicates = [1, 2, 3, 4, 1, 2, 5, 3];
console.log(findDuplicates(arrayWithDuplicates)); // [1, 2, 3]
