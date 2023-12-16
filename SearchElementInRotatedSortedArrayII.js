function SearchElementInRotatedSortedArrayII(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return true;

    if ((array[low] === array[mid]) === array[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    if (array[low] <= array[mid]) {
      if (array[low] <= target && target <= array[mid]) {
        high = mid - 1;
      } else {
        // Not exist in the left half
        low = mid + 1;
      }
    } else {
      if (array[mid] <= target && target <= array[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
}

let array = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let target = 10;

console.log(SearchElementInRotatedSortedArrayII(array, target));
