function flatten(array, shallow = false) {
    if (shallow) {
        return [].concat(...array);
    }
    
    return array.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flatten(item)); // Recursively flatten
        }
        acc.push(item);
        return acc;
    }, []);
}

// Example usage
console.log(flatten([1, [2], [3, [[4]]], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); // [1, 2, 3, [[4]], 5, 6]
