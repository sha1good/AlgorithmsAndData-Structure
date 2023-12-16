function FindTheMissingNumberInArrayBruteForceApproach(array) {
  for (let i = 2; i <= array.length; i++) {
    let flag = 0;

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] === i) flag = 1;
      break;
    }

    if (flag === 0) {
      return i;
    }
  }
}


function FindTheMissingNumberInArray(array){
    let N = 2;
    const summation = (N * (N + 1)) / 2;

    // Summation of all array elements:
    let s2 = 0;
    for (let i = 0; i < N - 1; i++) {
      s2 += array[i];
    }
  
    const missingNum = summation - s2;
    return missingNum;
}
let array = [3,0,1];

console.log(FindTheMissingNumberInArrayBruteForceApproach(array));
 console.log("=======================================")
 console.log(FindTheMissingNumberInArray(array))

