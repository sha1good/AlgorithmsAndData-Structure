function SortAnArrayOf0s1sAnd2s(array) {
  return array.sort((a, b) => a - b);
}

const SortAnArrayOf0s1sAnd2sBetterApproach = (array) => {
  let j = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j--;
    }
  }

  return array;
};

function SortAnArrayOf0s1sAnd2sBetterSolution(array) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      count0 += 1;
    } else if (array[i] === 1) {
      count1 += 1;
    } else {
      count2 += 1;
    }
  }

  console.log(count0);
  console.log(count1);
  console.log(count2);

  for (let i = 0; i < count0; i++) array[i] = 0;
  for (let i = count0; i < count0 + count1; i++) array[i] = 1;
  for (let i = count0 + count1; i < array.length; i++) array[i] = 2;

  return array;
}

let array = [2, 0, 2, 1, 1, 0]; //[2,0,1]; [2, 0, 2, 1, 1, 0];

console.log(SortAnArrayOf0s1sAnd2sBetterSolution(array));

console.log(SortAnArrayOf0s1sAnd2s(array));

console.log("With Optimal Approach------");

console.log(SortAnArrayOf0s1sAnd2sBetterApproach(array));
