 const longestPalindromicSubstring = (stringInput) =>{


  let start = 0, end = 0;

   for (let i=0;  i<stringInput.length; i++){
     
    const center  = getCenter(stringInput, i)
     const bounds = expandAroundCenter(stringInput, center[0], center[1])
      let L = bounds[0], R = bounds[1];
      if(R - L > end - start){
         start = L;
         end = R;
      }

     console.log("---------------")
     i = center[1]; // Move to the end of the center, i++ will then shift the pointer to the index right after the current center
   }

   return stringInput.substring(start, end + 1); //Reason why I add +1 to end  is that substring will always pick from start to second to the last element in a string
 }


  const expandAroundCenter = (stringInput, left, right) =>{
    let L = left, R= right;

    while(L >=0 && R < stringInput.length && stringInput[L] === stringInput[R]){
      L--;
      R++;
    }
    console.log("Expand Return " + (L+1) + ":" + (R-1))
     return [++L, --R]
  }

  const getCenter = (string, C) =>{
    console.log("The Index " + C)
     let  L= C, R= C;
     while(string[L] === string[++R] && R <= string.length);
        console.log("return " + L + ":" + (R - 1))
        return [L, --R]
  }

console.log(longestPalindromicSubstring("abaxyzzyxm"))
