function FizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    // Is the number a multiple of 3 and 5?

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}



 FizzBuzz();