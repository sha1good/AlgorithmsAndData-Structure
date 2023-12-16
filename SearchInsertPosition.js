//Problem Statement: You are given a sorted array arr of distinct values and a
// target value x. You need to search for the index of the target value in the array.

function SearchInsertPosition(array, x) {
  if (array.length === 0) return;

  let index = array.length;

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] >= x) {
      index = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return index;
}

let array = [1, 2, 4, 7];
let x = 6;

console.log(SearchInsertPosition(array, x));
