function removeDuplicates(array) {
  //   const map = {};

  //   for (let arr of array) {
  //     if (map[arr]) {
  //       map[arr]++;
  //     } else {
  //       map[arr] = 1;
  //     }
  //   }

  //  return Object.keys(map);

  return [...new Set(array)];

//    console.log(array)

//  array = array.reduce((total, currentvalue) => {
//     if (total.indexOf(currentvalue) === -1) {
//       total.push(currentvalue);
//     }
//   }, []);

//   return array;
}


let array = [1, 1, 2, 4, 5, 4, 7, 8, 8, 8];
console.log(removeDuplicates(array));
