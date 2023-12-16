const Fibonacci = (i, array, n) => {
    if (i >= n / 2) return;

    Swap(array[i], array[n - i - 1]).join(" ");

   for(let i=0; i < array.length; i++){
    
    return 
     
   } 
    
   Fibonacci(i + 1, array, n);
};

function Swap(x, y, temp) {
  temp = x;
  x = y;
  y = temp;

  return [x, y];
}
const array = [1, 2, 3, 4, 5];



console.log(Fibonacci(0,array, 5))

console.log(Swap(4, 10));
