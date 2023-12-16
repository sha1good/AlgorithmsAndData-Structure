//   function getMinMax(array){
//     return {
//         min: Math.min(...array),
//         max: Math.max(...array)
//     }
//   }


function getMinMax(array){
    const sortedArray =  array.sort((a,b) => (a - b));

 return {
    min: sortedArray[0],
    max:  sortedArray[sortedArray.length - 1]
 }
}


   console.log(getMinMax([1, 10, 2, 9, 3, 7, 4, 6, 5]))