function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort left half
    const right = mergeSort(arr.slice(mid)); // Sort right half

    return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const sampleArray = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(sampleArray);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
