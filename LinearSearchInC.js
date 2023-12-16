function LinearSearchInC(array, number) {
    if (array.includes(number)) {
        return array.indexOf(number);
      }
  return -1;
}


 function LinearSearchInCAnotherSolution(array, number) {
    
    for(let i=0; i < array.length; i++){
        if(array[i]  === number)
        return i;
    }
     return -1;
 }

let array = [1, 2, 3, 4, 5];
let number = 3;
 console.log(LinearSearchInC(array, number))
  console.log("===============================================")
  console.log(LinearSearchInCAnotherSolution(array, number))