function FindTripletThatAddUpToZeroOptimalSolution(array) {
  let N = array.length;
  array = array.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < N; i++) {
    if (i> 0 && array[i] === array[i - 1]) continue;

    let j = i + 1;
    let k = N - 1;

    while (j < k) {
      let sum = array[i] + array[j] + array[k];
      if (sum < 0) {
        // Do not forget , 0 is our target
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [array[i], array[j], array[k]];
        result.push(temp);
        j++;
        k--;

        while (j < k && array[j] === array[j - 1]) j++;
        while (j < k && array[k] === array[k + 1]) k--;
      }
    }
  }

  return result;
}

function FindTripletThatAddUpToZeroBetterApproach(array) {
  if (array.length === 0) return;

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let hashSet = new Set();
    for (let j = i + 1; j < array.length; j++) {
      //target = array[i] + array[j] + array[thirdElement] === array[thirdElement] = target - array[i] + array[j]
      let thirdElement = -(array[i] + array[j]);

      //Find the element in the set:
      if (hashSet.has(thirdElement)) {
        let temp = [array[i], array[j], thirdElement].sort((a, b) => a - b);
        result.push(temp);
      }
      hashSet.add(array[j]);
    }
  }

  let set = new Set(result.map(JSON.stringify));
  result = Array.from(set).map(JSON.parse);
  return result;
}

const FindTripletThatAddUpToZeroBruteForceApproach = (array) => {
  let target = 0;
  if (array.length === 0) return;

  let result = [];
  // check all possible triplets:
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let sum = array[i] + array[j] + array[k];
        if (sum === target) {
          let temp = [array[i], array[j], array[k]].sort((a, b) => a - b);
          result.push(temp);
        }
      }
    }
  }

  //store the set in the answer:
  let set = new Set(result.map(JSON.stringify));
  result = Array.from(set).map(JSON.parse);

  return result;
};

function triplet(n, arr) {
  let st = new Set();
  let ans = [];

  //n = arr.length;

  // check all possible triplets:
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  //store the set in the answer:
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  console.log("Printing Answers=====");
  console.log(ans);
  return ans;
}
let array =  [-2,-2,-1,-1,-1,0,0,0,2,2,2]; //[-1, 0, 1, 2, -1, -4];
let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
let ans = triplet(n, arr);
for (let it of ans) {
  process.stdout.write("[");
  for (let i of it) {
    process.stdout.write(i + " ");
  }
  process.stdout.write("] ");
}
console.log("================ Better Approach =====================");

console.log(FindTripletThatAddUpToZeroBetterApproach(array));
// Time Complexity: O(N2 * log(no. of unique triplets)), where N = size of the array.
//Reason: Here, we are mainly using 3 nested loops.
//And inserting triplets into the set takes O(log(no. of unique triplets)) time complexity.
//But we are not considering the time complexity of sorting as we are just sorting 3 elements every time.

//Space Complexity: O(2 * no. of the unique triplets)+ O(N)
//as we are using a set data structure and a list to store the triplets
//and extra O(N) for storing the array elements in another set.
console.log("================ Brute Force Approach =====================");

// Time complexity is O(N3)
//Space Complexity (O(1))
console.log(FindTripletThatAddUpToZeroBruteForceApproach(array));

//Time Complexity: O(NlogN)+O(N2), where N = size of the array.
//Reason: The pointer i, is running for approximately N times. 
//And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. 
//So the total time complexity will be O(N2). 

//Space Complexity: O(no. of triplets), This space is only used to store the answer. 
//We are not using any extra space to solve this problem. 
//So, from that perspective, space complexity can be written as O(1).
console.log("================ Optimal Approach =====================");

console.log(FindTripletThatAddUpToZeroOptimalSolution(array));

// function tripletBettter(n, arr) {
//   let st = new Set();
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     let hashset = new Set();
//     for (let j = i + 1; j < n; j++) {
//       //Calculate the 3rd element:
//       let third = -(arr[i] + arr[j]);

//       //Find the element in the set:
//       if (hashset.has(third)) {
//         let temp = [arr[i], arr[j], third];
//         temp.sort((a, b) => a - b);
//         ans.push(temp);
//       }
//       hashset.add(arr[j]);
//     }
//   }

//   //store the set in the answer:
//   let set = new Set(ans.map(JSON.stringify));
//   ans = Array.from(set).map(JSON.parse);
//   return ans;
// }

// console.log(tripletBettter(array));

// let arr = [-1, 0, 1, 2, -1, -4];
// let n = arr.length;
// let ans = triplet(n, arr);
// for (let it of ans) {
//     process.stdout.write("[");
//     for (let i of it) {
//         process.stdout.write(i + " ");
//     }
//     process.stdout.write("] ");
// }
// console.log();
