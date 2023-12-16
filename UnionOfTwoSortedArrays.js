function UnionOfTwoSortedArrays(array1, array2) {
  let newArray = array1.concat(array2);
  return [...new Set(newArray)];
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5];



function UnionOfTwoSortedArraySolution(array1, array2){
    let newArray = array1.concat(array2);

    let uniqueArray = newArray.filter((item, index) => newArray.indexOf(item) === index)
    return  uniqueArray;
}

console.log(UnionOfTwoSortedArrays(arr1, arr2));
console.log("========================================")

console.log(UnionOfTwoSortedArraySolution(arr1,arr2))