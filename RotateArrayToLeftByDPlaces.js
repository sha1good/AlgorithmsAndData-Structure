const RotateArrayToLeftByDPlaces = (array, n) => {
  let temp = array.splice(0, 3);

  for (i = 3; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array[n - 1] = temp;

  return array.flat(1);
};

n = 5;
let array = [1, 2, 3, 4, 5];

console.log(RotateArrayToLeftByDPlaces(array, n));
