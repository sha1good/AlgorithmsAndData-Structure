const CountReversePairsBruteForce = (array) => {
  let N = array.length;

  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (array[i] > 2 * array[j]) {
        count += 1;
      }
    }
  }
  return count;
};

function merge(array, low, mid, high) {
  let left = low;

  let right = mid + 1;
  let temp = [];

  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  // let us transfer  elements from temporary array to our orignial array
  for (let i = low; i <= high; i++) {
    array[i] = temp[i - low];
  }
  return array;
}

function countPairs(array, low, mid, high) {
  let right = mid + 1;
  let count = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && array[i] > 2 * array[right]) {
      right++; // While this condition is true
    }
    count += right - (mid + 1); // This is  the difference from the distance at right handside
  }

  return count;
}

function mergeSort(array, low, high) {
  let count = 0;
  if (low >= high) return count;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(array, low, mid);
  count += mergeSort(array, mid + 1, high);
  count += countPairs(array, low, mid, high); // // Modification
  merge(array, low, mid, high);
  return count;
}

let array = [1, 3, 2, 3, 1];

//Time Complexity: O(N2), where N = size of the given array.
//Reason: We are using nested loops here and those two loops roughly run for N times.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log("============ Brute Force Solution =====================");
console.log(CountReversePairsBruteForce(array));

console.log("============ Optimal Solution =====================");

function noOfCountReversePairsOptimalSolution(array) {
  return mergeSort(array, 0, array.length - 1);
}

let result = noOfCountReversePairsOptimalSolution(array);

console.log("This is the result", result);
