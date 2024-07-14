function difference(array1, array2) {
    const flatArray2 = flatten(array2);
    return array1
        .filter(item => !flatArray2.includes(item))
        .concat(flatArray2.filter(item => !array1.includes(item)));
}

// Example usage
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
