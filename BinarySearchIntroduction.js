function BinarySearchIntroductionIterativeApproach(array) {
  if (array.length === 0) return;

  let low = 0;
  let high = array.length - 1;
  let target = 6;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    else if (target > array[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}


 function BinarySearchIntroductionRecursiveApproach(array, low, high, target){
     if(low > high){
        return  -1
     }

     let mid = Math.floor((low + high) /2)
     if(array[mid] === target) return mid
     else if(target >  array[mid])  return BinarySearchIntroductionRecursiveApproach(array, mid + 1, high, target)
     else  return BinarySearchIntroductionRecursiveApproach(array, low, mid - 1, target )
 }

function ReturningRecursion(array){

    let target = 13;
    let N = array.length;
    let low = 0;
    let high = N-1
    return BinarySearchIntroductionRecursiveApproach(array, low, high, target)
}


let array = [3, 4, 6, 7, 9, 12, 16, 17];


console.log("============== Iterative approach =============")
console.log(BinarySearchIntroductionIterativeApproach(array));

 console.log("=========== Recursively Aproach ========================")


 let result = ReturningRecursion(array)
 console.log(result)


