function CountTheNumberOfSubarrayWithGivenXorKBetterSolution(array, target) {
  if (array.length === 0) return;
  let N = array.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    let sumXOR = 0;

    for (let j = i; j < N; j++) {
      sumXOR = array[i] + array[j];

      if (sumXOR === target) {
        count = count + 1;
      }
    }
  }

  return count;
}

function subarraysWithXorKOptimalSolution(a, k) {
    const n = a.length; //size of the given array.
    let xr = 0;
    const mpp = new Map(); //declaring the map.
    mpp.set(xr, 1); //setting the value of 0.
    let cnt = 0;
  
    for (let i = 0; i < n; i++) {
      // prefix XOR till index i:
      xr = xr ^ a[i];
  
      //By formula: x = xr^k:
      const x = xr ^ k;
  
      // add the occurrence of xr^k
      // to the count:
      cnt += mpp.get(x) || 0;
  
      // Insert the prefix xor till index i
      // into the map:
      mpp.set(xr, (mpp.get(xr) || 0) + 1);
    }
    return cnt;
  }


let array = [4, 2, 2, 6, 4];
let target = 6;

//Time Complexity is O(N2)
//Space complexity is O(1)
console.log(CountTheNumberOfSubarrayWithGivenXorKBetterSolution(array, target));


console.log(`The number of subarrays with XOR Optimal solution is`);

 console.log(subarraysWithXorKOptimalSolution(array, target))
