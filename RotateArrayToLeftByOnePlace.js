function RotateArrayToLeftByOnePlace(array) {
  let firstElement = array[0];
  let deletedItems = array.slice(1, array.length);

  return [deletedItems, firstElement].flat(Infinity);
}

function solve(array, n) {
  let temp = array[0];

  for (i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array[n - 1] = temp;

  return array;
}

let array = [1, 2, 3, 4, 5];

console.log(RotateArrayToLeftByOnePlace(array));

let n = 5;

let arr = [1, 2, 3, 4, 5];

console.log(solve(arr, n));
