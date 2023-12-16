function MergeOverlappingSubIntervalsForceBrute(array) {
  array = array.sort((a, b) => a[0] - b[0]);

  let result = [];
  let N = array.length;

  for (let i = 0; i < N; i++) {
    let start = array[i][0];
    let end = array[i][1];
    //[1, 3],
    //[2, 3], for example

    if (result.length > 0 && end <= result[result.length - 1][1]) {
      continue; // i.e  the current end of the current interval is already lying inside our  assumed result
      // then , we wil not do anything.....
    }

    // Check if they are overlapping and Update my end
    for (let j = i + 1; j < N; j++) {
      if (array[j][0] <= end) {
        end = Math.max(end, array[j][1]);
      } else {
        break; // No need of going through the entire array since the array is already sorted
      }
    }
    result.push([start, end]);
  }
  return result;
}

function MergeOverlappingSubIntervalsOptimalSolution(array) {
  if (array.length === 0) return;

  array = array.sort((a, b) => a[0] - b[0]);
  let result = [array[0]]; //

  for (let i = 0; i < array.length; i++) {
    // if the array is empty  or the first element of my new array is greater
    // the last element of  my result, we create new one for it in the result array ....
    if (array.length === 0 || array[i][0] > result[result.length - 1][1]) {
      result.push(array[i]);
    } else {
      // if it is overllaping .....
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        array[i][1]
      );
    }
  }

  return result;
}

let array = [
  [1, 3],
  [2, 6],
  [8, 10],
  [8, 9],
  [2, 4],
  [15, 18],
  [16, 17],
];

//Time  Complexity  is O(NlogN + 2N),
//Reason: We are sorting for each array and using two loops to iterate  which is almost N2
//Space Complexity is O(N)
console.log(" Brute Force Solution ===================");
console.log(MergeOverlappingSubIntervalsForceBrute(array));



console.log(" Optimal Solution ===================");
//Time  Complexity  is O(NlogN ) + O(N),
//Reason: We are sorting for each array and using two loops to iterate  which is almost N2
//Space Complexity is O(N)
console.log(MergeOverlappingSubIntervalsOptimalSolution(array));
