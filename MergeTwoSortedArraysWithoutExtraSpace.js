const MergeTwoSortedArraysWithoutExtraSpaceWithBruteForceApproach = (
  array1,
  array2,
  n,
  m
) => {
  //With BruteForce Approach

  let left = 0;
  let right = 0;

  let index = 0; // This is going to be indices of array3
  let array3 = new Array(n + m);

  while (left < n && right < m) {
    if (array1[left] <= array2[right]) {
      array3[index] = array1[left];
      left++, index++;
    } else {
      array3[index] = array2[right];
      index++, right++;
    }
  }

  // If there are still elements in array1, we will copy it to array3
  while (left < n) {
    array3[index++] = array1[left++];
  }

  // If there are still elements in array1, we will copy it to array3
  while (right < m) {
    array3[index++] = array2[right++];
  }

  //Now we need to copy back our array3 to both array1 and array2

  for (let i = 0; i < n + m; i++) {
    if (i < n) array1[i] = array3[i];
    else array2[i - n] = array3[i];
  }

  console.log("array1: ", array1.join(" "));
  console.log("array2: ", array2.join(" "));
};

function SwapArrayLeftAndRight(array1, left, array2, right) {
  if (array1[left] > array2[right]) {
    [array1[left], array2[right]] = [array2[right], array1[left]];
  }
}

function MergeTwoSortedArraysWithoutExtraSpaceWithOptimalApproach(
  array1,
  array2,
  n,
  m
) {
  let left = array1.length - 1;
  let right = 0;

  while (left < n && right < m) {
    if (array1[left] > array2[right]) {
      SwapArrayLeftAndRight(array1, left, array2, right);
      left--, right++;
    } else {
      break; //  they are already sorted already
    }
  }

  // Sort arr1[] and arr2[] individually:
  console.log("Array 1: ", array1.sort((a, b) => a - b).join(" "));
  console.log("Array 1: ", array2.sort((a, b) => a - b).join(" "));
}

let array1 = [1, 4, 8, 2];
let array2 = [4, 3, 9];
let n = array1.length;
let m = array2.length;

//This approach is not the exact solution according to the question as
//in this approach we are going to use an extra space i.e. an array
//Time Complexity: O(n+m) + O(n+m), where n and m are the sizes of the given arrays.
//Reason: O(n+m) is for copying the elements from arr1[] and arr2[] to arr3[]. And another O(n+m) is for filling back the two given arrays from arr3[].

//Space Complexity: O(n+m) as we use an extra array of size n+m.
MergeTwoSortedArraysWithoutExtraSpaceWithBruteForceApproach(
  array1,
  array2,
  n,
  m
);

MergeTwoSortedArraysWithoutExtraSpaceWithOptimalApproach(array1, array2, n, m);
