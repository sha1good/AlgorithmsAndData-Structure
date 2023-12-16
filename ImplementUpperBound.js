function ImplementUpperBound(array, x) {
  if (array.length === 0) return;

  let upperbound = array.length;

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] > x) {
      upperbound = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
   return upperbound;
}

let array = [1,2,2,3];
let x = 2;
console.log(ImplementUpperBound(array, x));
