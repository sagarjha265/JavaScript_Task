class BinarySearch {
    constructor(arr) {
        this.arr = arr;
    }

    br_search(target) {
        let left = 0;
        let right = this.arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (this.arr[mid] === target) {
                return target; // Found the target
            }
            if (this.arr[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
        
        return 'Not found'; // Target not found
    }
}

// Example usage:
const l = new BinarySearch([0, 1, 2, 3, 4, 5, 6]);
console.log(l.br_search(5)); // Output: 5
