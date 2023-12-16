function CheckIfArrayIsSorted(array, N) {
  
  
for (i = 0; i <= array.length -1; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    } 
  }
  return  true;
}

let N = 5,
  array = [1, 2,3,4,5];

console.log(CheckIfArrayIsSorted(array, N));
