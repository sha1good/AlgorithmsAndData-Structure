function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (j = i; j > 0 && array[j - 1] > array[j]; j--) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
    }
  }

  return array;
}

let array = [52, 46, 13, 25, 10, 5];

console.log(InsertionSort(array));
