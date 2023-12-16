const ImplementLowerBound = (array, x) => {
  if (array.length === 0) return;

  let lowerBound = array.length;

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] >= x) {
          lowerBound = mid;
          high = mid - 1;
    }
     else low = mid + 1;
  }
  return lowerBound;
};

let array = [3,5,8,15,19];
let x = 9;


//Time Complexity: O(logN), where N = size of the given array.
//Reason: We are basically using the Binary Search algorithm.

//Space Complexity: O(1) as we are using no extra space.
console.log(ImplementLowerBound(array, x));
