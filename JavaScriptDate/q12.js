function computeSumAndProduct(arr) {
    let sum = 0;
    let product = 1;

    for (let num of arr) {
        sum += num;
        product *= num;
    }

    return {
        sum: sum,
        product: product
    };
}

// Example usage
const integers = [1, 2, 3, 4, 5];
const result = computeSumAndProduct(integers);
console.log(`Sum: ${result.sum}, Product: ${result.product}`);
