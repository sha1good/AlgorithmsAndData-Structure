function RearrangeArrayElementsBySignBruteForce(array) {
  let positiveArray = [];
  let negativeArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray.push(array[i]);
    } else {
      negativeArray.push(array[i]);
    }
  }

  for (let i = 0; i < array.length / 2; i++) {
    array[2 * i] = positiveArray[i];
    array[2 * i + 1] = negativeArray[i];
  }

  return array;
}

function RearrangeArrayElementsBySignIfPositiveOrNegativeElementLeft(
  arrayPosNegGreater
) {
  // Define 2 arrays, one for storing positive
  // and other for negative elements of the array.
  let positiveArray = [],
    negativeArray = [];

  // Segregate the array into positives and negatives.
  for (let i = 0; i < arrayPosNegGreater.length; i++) {
    if (arrayPosNegGreater[i] > 0) {
      positiveArray.push(arrayPosNegGreater[i]);
    } else {
      negativeArray.push(arrayPosNegGreater[i]);
    }
  }

  // If positives are lesser than the negatives.

  if (positiveArray.length < negativeArray.length) {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.

    for (let i = 0; i < positiveArray.length; i++) {
      arrayPosNegGreater[2 * i] = positiveArray[i];
      arrayPosNegGreater[2 * i + 1] = negativeArray[i];
    }

    // Fill the remaining negatives at the end of the array.
    let index = positiveArray.length * 2;
    //This is the index where the remaining negative value of the array
    // Will start filling up [ Because positiveArray.length * 2  will contain the index of both positives and negatives indexes]
    for (let i = index; i < negativeArray.length; i++) {
      arrayPosNegGreater[i] = negativeArray[i];
      index++;
    }
  } else {
    // First, fill array alternatively till the point
    // where positives and negatives are equal in number.
    for (let i = 0; i < negativeArray.length; i++) {
      arrayPosNegGreater[2 * i] = positiveArray[i];
      arrayPosNegGreater[2 * i + 1] = negativeArray[i];
    }

    let index = negativeArray.length * 2;

    for (let i = index; i < positiveArray.length; i++) {
      arrayPosNegGreater[i] = positiveArray[i];
      index++;
    }
  }

  return arrayPosNegGreater;
}

const RearrangeArrayElementsBySignOptimalSolution = (array) => {
  let positiveIndex = 0,
    negativeIndex = 1;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArray[negativeIndex] = array[i];
      negativeIndex += 2;
    } else {
      newArray[positiveIndex] = array[i];
      positiveIndex += 2;
    }
  }

  return newArray;
};


function RearrangeElementInArrayWithAnotherSolution(array){

  let newArray = []
  let positive = array.filter((num) => num > 0)
  let negative = array.filter((num) => num < 0)

  let positiveIndex = 0;
  let negativeIndex = 0;

  while(positiveIndex < positive.length && negativeIndex < negative.length){
   newArray.push(positive[positiveIndex], negative[negativeIndex])
   positiveIndex++;
   negativeIndex++;
  }
   // If there are remaining positive numbers, append them to the newArray
   while(positiveIndex < positive.length){
       newArray.push(positive[positiveIndex])
       positiveIndex++;
   }

   // Also If there are remaining negative numbers, append them to the newArray
  while(negativeIndex < negative.length){
       newArray.push(negative[negativeIndex])
       negativeIndex++;
   }

    return newArray;
}

let array = [1, 2, -4, -5];

let arrayPosNegGreater = [1, 2, -4, -5, 3, 4];

//O(N + N/2 Time Complexity and O(N) space  complexity) 1, 2, -4, -5 //
console.log(RearrangeArrayElementsBySignBruteForce(array));

console.log("if there are positive or negative item left");
//O(2N Time Complexity and O(N) space  complexity) 1, 2, -4, -5 //
console.log(
  RearrangeArrayElementsBySignIfPositiveOrNegativeElementLeft(
    arrayPosNegGreater
  )
);


console.log("==========================With more positive Element or negative element")
//O(N Time Complexity and O(N) space  complexity) 1, 2, -4, -5 //
//Time Complexity:
//The time complexity of this solution is O(n), where n is the length of the input array. 
//The filtering and merging operations are performed linearly in relation to the size of the input array.

//Space Complexity:
//The space complexity is also O(n) because additional arrays are created to store positive 
//and negative numbers separately. The space required is proportional to the size of the input array.
console.log(RearrangeElementInArrayWithAnotherSolution(arrayPosNegGreater))
console.log("=================================");
//O(N Time Complexity and O(N) space  complexity) 1, 2, -4, -5 //
console.log(RearrangeArrayElementsBySignOptimalSolution(array));

