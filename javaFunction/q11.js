function createIdentityMatrix(n) {
    // Create a 2D array filled with zeros
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    // Set the diagonal elements to 1
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1;
    }

    return matrix;
}

// Example usage:
const n = 3; // Size of the identity matrix
const identityMatrix = createIdentityMatrix(n);
console.log(identityMatrix);
