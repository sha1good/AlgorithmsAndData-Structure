const linearSearch = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return true;
    }
  }
  return false;
};

function LongestPossibleSubSequenceWithBruteForce(array) {
  let longest = 1;

  let n = array.length;

  for (let i = 0; i < n; i++) {
    let x = array[i];
    let count = 1;

    while (linearSearch(array, x + 1) === true) {
      x += 1;
      count += 1;
    }

    longest = Math.max(longest, count);
  }

  return longest;
}

function LongestPossibleSubSequenceWithBetterApproach(array) {
  if (array.length === 0) return 0;
  let longest = 1;
  let lastSmaller = Number.MIN_SAFE_INTEGER;
  let count = 0;
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] - 1 === lastSmaller) {
      lastSmaller = array[i];
      count = count + 1;
    } else {
      count = 1;
      lastSmaller = array[i];
    }
    longest = Math.max(longest, count);
  }

  return longest;
}

function LongestPossibleSubSequenceWithOptimalSolution(array) {
  let n = array.length;
  if (n === 0) return 0;
  let longest = 1;

  let newSet = new Set();

  for (let i = 0; i < n; i++) {
    newSet.add(array[i]);
  }

  for (let st of newSet) {
    if (!newSet.has(st - 1)) {
      // That means it is the starting element in the set.  It  does  not have previous
      let x = st;
      let count = 1;
      while (newSet.has(x + 1)) {
        x = x + 1;
        count = count + 1;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
}

let array = [102, 4, 100, 1, 101, 3, 2, 1, 1];
//Time Complexity is O(n2) while space complexity  is O(1)
console.log(LongestPossibleSubSequenceWithBruteForce(array));

console.log("=============== With Better Approach ==========");

//Time Complexity: O(NlogN) + O(N), N = size of the given array.
//Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).
console.log(LongestPossibleSubSequenceWithBetterApproach(array));

console.log("===== With Optimal Solution ====");

//Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
//Reason: O(N) for putting all the elements into the set data structure. 
//After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).
//Space Complexity: O(N), as we are using the set data structure to solve this problem.
console.log(LongestPossibleSubSequenceWithOptimalSolution(array));
