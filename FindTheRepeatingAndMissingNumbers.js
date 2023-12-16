const FindTheRepeatingAndMissingNumbersBruteForceApproach = (array) => {
  let N = array.length;

  let missingNumber = -1;
  let repeatingNumber = -1;

  for (let i = 1; i <= N; i++) {
    // We are using i to generate our number
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (array[j] === i) {
        count += 1;
      }
    }

    if (count === 2) repeatingNumber = i;
    else if (count === 0) missingNumber = i;

    if (repeatingNumber != -1 && missingNumber !== -1) {
      break;
    }
  }

  return [repeatingNumber, missingNumber];
};

function FindTheRepeatingAndMissingNumbersBeeterSolution(array) {
  let N = array.length;
  let hash = new Array(N + 1).fill(0);
  let repeatingNumber = -1;
  let missingNumber = -1;

  for (let i = 0; i < N; i++) {
    hash[array[i]]++;
  }
  //return hash;

  for (let i = 1; i < hash.length; i++) {
    if (hash[i] === 2) repeatingNumber = i;
    else if (hash[i] === 0) missingNumber = i;

    if (repeatingNumber !== -1 && missingNumber !== -1) {
      break;
    }
  }

  return [repeatingNumber, missingNumber];
}

function findMissingRepeatingNumbersOptimalSolution(a) {
  const n = a.length; // size of the array

  // Find Sn and S2n:
  const SN = (n * (n + 1)) / 2;
  const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

  // Calculate S and S2:
  let S = 0,
    S2 = 0;
  for (let i = 0; i < n; i++) {
    S += a[i];
    S2 += a[i] * a[i];
  }

  //S-Sn = X-Y:
  const val1 = S - SN;

  // S2-S2n = X^2-Y^2:
  let val2 = S2 - S2N;

  //Find X+Y = (X^2-Y^2)/(X-Y):
  val2 = val2 / val1;

  //Find X and Y: X = ((X+Y)+(X-Y))/2 and Y = X-(X-Y),
  // Here, X-Y = val1 and X+Y = val2:
  const x = (val1 + val2) / 2;
  const y = x - val1;

  return [x, y];
}

let array = [3, 1, 2, 5, 4, 6, 7, 5];

//Time Complexity: O(N2), where N = size of the given array.
//Reason: Here, we are using nested loops to count occurrences of every element between 1 to N.

//Space Complexity: O(1) as we are not using any extra space.
console.log(FindTheRepeatingAndMissingNumbersBruteForceApproach(array));

console.log("============ Better solution =======================");

//Time Complexity: O(2N), where N = size of the given array.
//Reason: We are using two loops each running for N times. So, the time complexity will be O(2N).

//Space Complexity: O(N) as we are using a hash array to solve this problem.
console.log(FindTheRepeatingAndMissingNumbersBeeterSolution(array));

console.log("================= Optimal Solution ============================");
//Time Complexity: O(N), where N = size of the given array.
//Reason: We are using two loops each running for N times. So, the time complexity will be O(2N).

//Space Complexity: O(1) as we are using a hash array to solve this problem.
console.log(findMissingRepeatingNumbersOptimalSolution(array));
