function isAPrimeNumber(num) {

  let isPrime =  true;
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for(let i = 2; i < num; i++){
      if(num % i === 0){
         isPrime = false;
           break;
      }
  }

  if(isPrime){
    console.log(`${num} is a prime number`)
  }else{
    console.log(`${num} is not a prime number`)
  }
}

}
console.log(isAPrimeNumber(105));
