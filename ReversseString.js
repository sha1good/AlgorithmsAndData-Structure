// let reverseString = "";

//  for(let i=string.length -1; i>=0; i--){
//    reverseString +=string.charAt(i);
//  }

//   console.log(reverseString);

let isPalidrome = function (s1,s2) {
  // const pattern = /^[a-zA-Z0-9]+$/;

  // let firstString = "";
  // let secondString = "";

  // for (let char of s1) {
  //   if (char.match(pattern)) {
  //       firstString += char.toLowerCase();
  //   }
  // }

  // for (let char of s2) {
  //   if (char.match(pattern)) {
  //     secondString += char.toLowerCase();
  //   }
  // }


  let firstReverseString = s1.replace(/\s+/g,"").split("").reverse().join("");
  let secondReverseString =  s2.replace(/\s+/g, "").split("").reverse().join("");

  //  const concatString = firstReverseString + secondReverseString;

  //   let right = lowerCaseString.length - 1;
  //   let left = 0;

  //   while (left <= right) {
  //     if (lowerCaseString[left] !== lowerCaseString[right]) {
  //       return false;
  //     }

  //     left++;
  //     right--;
  //   }
  //   console.log("hello");
//   if (reverseString === lowerCaseString) {
//     return true;
//   }
//   return false;
 //return concatString;

  return  firstReverseString === secondReverseString;
};

console.log(isPalidrome("racecar ","racecar"));

// function isPalidrome() {
//   str = str.replace(/\s/g,"");

//   let reverseString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str.charAt(i);
//   }

//   return reverseString;
// };

// //let result = string === isPalidrome() ? true : false
// console.log(isPalidrome());
// if (str === isPalidrome()) {
//   console.log("It is palidrome");
// } else {
//   console.log("It is not a palidrome");
// }

//console.log(isPalidrome(string));
