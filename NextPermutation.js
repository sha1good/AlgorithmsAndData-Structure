const NextPermutation = (array) => {
  let index = -1;

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] < array[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return array.reverse();
  }

  for (let i = array.length - 1; i > index; i--) {
    if (array[i] > array[index]) {
      [array[i], array[index]] = [array[index], array[i]];
      break;
    }
  }
  //array.splice(start, deleteCount, item1, item2, ...);
  //start: The index at which to start changing the array.
  //deleteCount: An integer indicating the number of elements in the array to remove from start.
  //item1, item2, ...: The elements to add to the array, beginning from the start index.
  array.splice(
    index + 1,
    array.length - index - 1,
    ...array.slice(index + 1).reverse()
  );
  return array;
};


 function TestingSpread(array,anotherArray){
    return [...array, ...anotherArray]
 }

// Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically
//next greater permutation of numbers.
//If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).
// 3! = 3 * 2* 1 = 6 possible ways ==== how many ways would 3,1,2 can be  rearranged such that
// after rearrangement, it will  sorted in ascending order . 1,2,3 < 1,3,2 < 2,1,3 < 2,3,1, < 3,1,2 < 3,2,1
//So the next permutation that we are meant to return is [1,3,2]

// Steps....
// 1. We are going to find the index /break point... where the  second largest is greater than the largest
// 2. Swap the  current index of the break point with the next element slightly greater than the current element of the breakpoint
// 3. I will rearrarrage the array from index + 1 to array.length -1

let array = [2, 1, 5, 4, 3, 0, 0];
let anotherArray = [1, 2, 3];

//Time Complexity of this is O(3n) with O(1) space
console.log(NextPermutation(array));
console.log("=============================")
console.log(NextPermutation(anotherArray));
 console.log("===This is testing spread")
 console.log(TestingSpread(array,anotherArray))

