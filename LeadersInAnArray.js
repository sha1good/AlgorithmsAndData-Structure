function LeadersInAnArrayWithBruteForceApproach(array) {
  let result = [];

  for (i = 0; i < array.length; i++) {
    let leader = true;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] > array[i]) {
        leader = false;
        break;
      }

    if (leader) result.push(array[i]);
  }
  return result;
}

const LeadersInAnArrayWithOptimalApproach = (array) => {
  let n = array.length;
  let newArray = [];
  let maximum = array[n - 1];
  newArray.push(maximum);

  for (let i = n - 2; i >= 0; i--) {
    if (array[i] > maximum) {
      newArray.push(array[i]);
      maximum = array[i];
    }
   
  }

  return newArray;
};

function LeadersInAnArrayWithOptimalAnotherApproach(array){

    let maximum = Number.MIN_SAFE_INTEGER;
    let newArray = []

     for( let i = array.length -1;  i>= 0; i--){
         if(array[i] > maximum){
            newArray.push(array[i])
            maximum =  Math.max( maximum, array[i])
         }
       
     }

     return newArray.reverse();
}


 
  
let array = [10, 22, 12, 3, 0, 6]; // e.g 22 is a leader because everything in the rightmost sides are smaller
//Time Complexity is O(n2) and space  complexity is O(n)
console.log(LeadersInAnArrayWithBruteForceApproach(array));

console.log("==== With Optimal Solution =======");

//With Time Complexity of O(n) and space complexity of O(n)
console.log(LeadersInAnArrayWithOptimalApproach(array));

console.log("===== With Optimal Solution Another approach of Desceding order ====")
//With Time Complexity of O(n log n) and space complexity of O(n)
console.log(LeadersInAnArrayWithOptimalAnotherApproach(array))


