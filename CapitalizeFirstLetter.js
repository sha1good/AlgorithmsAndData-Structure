function CapitalizeFirstLetter(string) {
  const newArray = string.split(" ");

  console.log(newArray)
 
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }

  const returnArray = newArray.join(" ");
  return returnArray;

// const arr = str.split(" ");

// //loop through each element of the array and capitalize the first letter.


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

// //Join all the elements of the array back into a string 
// //using a blankspace as a separator 
// const str2 = arr.join(" ");
//   return str2;
}

function AnotherCapitalizeFirstLetter(string){
    let  words = [];
    let  newArray = string.split(" ");

    for( let word of newArray){
     words.push(word.charAt(0).toUpperCase() + word.slice(1))
    }
    
    return words.join(" ");
}
const string = "i have learned something new today";

console.log(CapitalizeFirstLetter(string));
