const SecondSmallestAndSecondLargestElement = (array) => {
  if (array.length === 0 || array.length === 1) {
    console.log(-1 + ":" + -1);
    return;
  }

  let small = Infinity;
  let secondSmall = Infinity;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    small = Math.min(small, array[i]);
    largest = Math.max(largest, array[i]);
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < secondSmall && array[i] !== small) {
      secondSmall = array[i];
    }

    if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i];
    }
  }

  return [secondSmall, secondLargest];
};

let array = [1, 2, 4, 6, 7, 5];

console.log(SecondSmallestAndSecondLargestElement(array));
