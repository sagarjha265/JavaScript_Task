function fibonacci(n) {
    const fibSeq = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSeq.push(0);
        } else if (i === 1) {
            fibSeq.push(1);
        } else {
            fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
        }
    }
    return fibSeq;
}

// Example usage:
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
