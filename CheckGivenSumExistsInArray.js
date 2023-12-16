function CheckGivenSumExistsInArrayBruteForce(array, target) {
  let result;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; i++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }

  // To avoid  compilation error
  return [-1, -1];
}

const CheckGivenSumExistsInArrayBetterSolution = (array, target) => {
  let preSeen = new Map();

  let difference = 0;

  for (let i = 0; i < array.length; i++) {
    difference = target - array[i];
    if (preSeen.has(difference) && difference + array[i] === target) {
      return [preSeen.get(difference), i];
    } else {
      preSeen.set(array[i], i);
    }
  }

  // To avoid  compilation error, this code does not do anything
  return [-i, -1];
};

function CheckGivenSumExistsInArrayOptimalSolution(array, target) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return "YES";
    } else if (sum < target) {
      left++;
    } else {
      right++;
    }
  }

  return "NO";
}

let target = 14,
  array = [2, 6, 5, 8, 11];

console.log(CheckGivenSumExistsInArrayBetterSolution(array, target));
console.log("Hello to the screen");
console.log(CheckGivenSumExistsInArrayOptimalSolution(array, target));

console.log("Hello to the  optimal approach");
console.log(CheckGivenSumExistsInArrayBruteForce(array, target));
