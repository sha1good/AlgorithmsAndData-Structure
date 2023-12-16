function MoveAllZeroToEnd(array) {
  let newArray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      newArray.push(array[i]);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }
  let newArrayLength = newArray.length;

  for (let i = newArrayLength; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
}

function MoveAllZeroToEndOptimalSolution(array) {
  let j = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[j], array[i]] = [array[i], array[j]];
      j++;
    }
  }

  return array;
}

let array = [1, 0, 2, 3, 0, 4, 0, 1];

console.log(MoveAllZeroToEnd(array));
console.log("==================================")
console.log(MoveAllZeroToEndOptimalSolution(array))
