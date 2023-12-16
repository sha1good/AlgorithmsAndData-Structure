







 function RemovingDuplicateElementFromSortedArray(array){
   
// ? return [...new Set(array)]
  let duplicate = array.filter((item, index) => array.indexOf(item) === index)
  return duplicate;
 }


//  The indexOf() method returns the index of the first occurrence of an element in an array. For example:

// let chars = ['A', 'B', 'A', 'C', 'B'];
// chars.indexOf('B');
// Code language: JavaScript (javascript)
// Output:

// 1  
// The duplicate item is the item whose index is different from its indexOf() value:

// let chars = ['A', 'B', 'A', 'C', 'B'];

// chars.forEach((c, index) => {
//     console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// });
// Code language: JavaScript (javascript)
// Output:

// A - 0 - 0
// B - 1 - 1
// A - 2 - 0
// C - 3 - 3
// B - 4 - 1
// To remove the duplicates, you use the filter() method to include only elements whose indexes match their indexOf values:

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);
// Code language: JavaScript (javascript)
// Output:

// [ 'A', 'B', 'C' ]


 const RemovingDuplicateElementFromSortedArrayWithForEach = (array) =>{

    let uniqueElement = []
     array.forEach((arr, index) =>{
         console.log(`${arr} - ${index} - ${array.indexOf(arr)}`)

         if(!uniqueElement.includes(arr)){
            uniqueElement.push(arr)
         }
     })

     return uniqueElement;
 }

  let array = [1,1,1,2,2,2,3,3,3]

  console.log(RemovingDuplicateElementFromSortedArrayWithForEach(array))
  
  console.log(RemovingDuplicateElementFromSortedArray(array))

  function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
      arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
  }
  
  const arr = [1, 1, 2, 2, 2, 3, 3];
  const k = removeDuplicates(arr);
  
  console.log("The array after removing duplicate elements is:");
  for (let i = 0; i < k; i++) {
    console.log(arr[i]);
  }


