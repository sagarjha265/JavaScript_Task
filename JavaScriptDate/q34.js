function nthLargest(array, n) {
    const uniqueSorted = Array.from(new Set(array)).sort((a, b) => b - a); // Sort in descending order
    return uniqueSorted[n - 1]; // n-th largest is at index n-1
}

// Example usage
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89
