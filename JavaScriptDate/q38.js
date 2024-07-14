function move(arr, fromIndex, toIndex) {
    const element = arr.splice(fromIndex < 0 ? arr.length + fromIndex : fromIndex, 1)[0];
    arr.splice(toIndex < 0 ? arr.length + toIndex : toIndex, 0, element);
    return arr;
}

// Test Data
console.log(move([10, 20, 30, 40, 50], 0, 2)); // [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10, 20, 30, 50, 40]
