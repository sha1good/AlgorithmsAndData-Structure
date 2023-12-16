function RearrangeElementInArray(array) {
  let newArray = [];
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    newArray.push(array[left], array[right]);
   left++;
   right--;

    if ( left === right) {
      newArray.push(array[left]);
      break;
    }
  }

  return newArray;
}

function rearrangeArray(array) {
    const newArray = [];
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      newArray.push(array[left++]);
      if (left <= right) {
        newArray.push(array[right--]);
      }
    }
  
    return newArray;
  }
  
 
let array = [1, 2, -4, -5, 3, 4, 3];

//Time complexity is rearrangeArray is O(n) and space complexity is O(n)
console.log(RearrangeElementInArray(array)); 


console.log("====With another solution ==")
//The time complexity of the sort method in JavaScript is generally O(n log n).
//The space complexity is O(1) because the sorting is performed in-place.
// The algorithm does not use any additional space that scales with the input size.
console.log(rearrangeArray(array))






  