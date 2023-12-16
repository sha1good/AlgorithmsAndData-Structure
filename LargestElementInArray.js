function LargestElementInArray(array) {
  let maxElement = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }

  return maxElement;
}

const array = [2, 5, 1, 3, 0];

console.log(LargestElementInArray(array));
