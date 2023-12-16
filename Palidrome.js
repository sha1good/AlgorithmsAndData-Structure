








 function isPalindrome(i, string){


    // Base Condition
    // If i exceeds half of the string, means all the elements 
    // are compared, we return true.

   if( i >= string.length /2) return true;

    if(string[i] !== string[string.length-i- 1] )  return false;

     return isPalindrome(i + 1, string)

 }

 let s = "SSmadamSS";
 console.log(isPalindrome(0,s));