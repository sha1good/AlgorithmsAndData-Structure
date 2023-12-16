function bubbleSort(arr, n) {
    // Base Case: range == 1.
    if (n === 1) return;

    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap elements if they are in the wrong order
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }

    // Range reduced after recursion:
    bubbleSort(arr, n - 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;

console.log("Original array:", arr);
bubbleSort(arr, n);
console.log("Sorted array:", arr);