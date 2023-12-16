// const largestMerge = function (word1, word2) {
//   let result = "";

//   if(word1.length === 0 && word2.length > 0){
//      return word2;
//   }

//   if(word2.length === 0 && word1.length > 0){
//     return word1;
//  }

//   while (word1.length > 0 && word2.length > 0) {
//     if (word1 > word2) {
//       result += word1.substring(0, 1);
//       word1 = word1.substring(1);

//     } else {
//       result += word2.substring(0, 1);
//       word2 = word2.substring(1);

//     }
//   }
//   if (word1.length) {
//     result += word1;
//   }
//   if (word2.length) {
//     result += word2;
//   }
//   return result;
// };

const largestMerge = function (word1, word2) {
  let result = "";

  while (word1 || word2) {
    if (word1 > word2) {
      result += word1[0];
      word1 = word1.slice(1);
    } else {
      result += word2[0];
      word2 = word2.slice(1);
    }
  }

    return result;
};

console.log(largestMerge("", "bcaaa"));


let word3 = "Adebisi";
console.log(word3.slice(1));