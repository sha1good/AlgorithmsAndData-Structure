const FindElementMoreThan3Times = (array) => {
  if (array.length === 0) return;

  let arrayMap = new Map();
  let maxKey;
  let maxValue = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (arrayMap.has(array[i])) {
      arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
    } else {
      arrayMap.set(array[i], 1);
    }
  }

  for (let [key, value] of arrayMap.entries()) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
};

function FindElementMoreThan3TimesAnotherApproach(array) {
  if (array.length === 0) return;

  let arrayMap = new Map();

  // least occurrence of the majority element:
  let min = Math.floor(array.length / 3) + 1;

  let element = [];

  for (let i = 0; i < array.length; i++) {
    if (arrayMap.has(array[i])) {
      arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
    } else {
      arrayMap.set(array[i], 1);
    }

    if (arrayMap.get(array[i]) == min) {
      element.push(array[i]);
    }

    if (element.length == 2) break;
  }

  return element.join(" ");
}

function FindTheMajorityElementOccursMoreThanNTimesWithOptimalSolution(array) {
  if (array.length === 0) return;

  let count1 = 0;
  let count2 = 0;
  let previousElement1 = -Infinity;
  let previousElement2 = -Infinity;

  let N = array.length;

  for (let i = 0; i < N; i++) {
    if (count1 === 0 && previousElement2 !== array[i]) {
      count1 = 1;
      previousElement1 = array[i];
    } else if (count2 === 0 && previousElement1 !== array[i]) {
      count2 = 1;
      previousElement2 = array[i];
    } 
    else if (array[i] === previousElement1) count1++;
    else if (array[i] === previousElement2) count2++;
    else {
      count1--, count2--;
    }
  }

  //return previousElement;

  // Manually check if the stored elements in
  // previousElement1 and previousElement2 are the majority elements

  let elements = [];
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < N; i++) {
    if (array[i] === previousElement1) count1++;
    if (array[i] === previousElement2) count2++; // This check if the element found is the majority in the array
  }

  let min = Math.floor(N / 3) + 1;
  if (count1 >= min) elements.push(previousElement1);
  if (count2 >= min) elements.push(previousElement2);
  return elements.sort().join(" ");
}

let array = [11, 33, 33, 11, 33, 11];
//Time Complexity: O(N*logN), where N = size of the given array
//Reason: We are using a map data structure. Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN).
//If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).
//Space Complexity: O(N) as we are using a map data structure. We are also using a list that stores a maximum of 2 elements. That space used is so small that it can be considered constant.
console.log(FindElementMoreThan3Times(array));

console.log("============Another Approach ==========");
//Time Complexity: O(N*logN), where N = size of the given array.
//Space Complexity: O(N) as we are using a map data structure. We are also using a list that stores a maximum of 2 elements.
console.log(FindElementMoreThan3TimesAnotherApproach(array));

console.log(
  "====================== with  More voting Algorithms==================="
);

//Time Complexity: O(N) + O(N), where N = size of the given array.
//Reason: The first O(N) is to calculate the counts and find the expected majority elements. The second one is to check if the calculated elements are the majority ones or not.

//Space Complexity: O(1) as we are only using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.
console.log(
  FindTheMajorityElementOccursMoreThanNTimesWithOptimalSolution(array)
);
