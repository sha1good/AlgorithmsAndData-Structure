function longestSubsequence(String1, String2) {
     let m =  String2.length;
     let n = String1.length;
    let previous = new Array(m + 1).fill(0)
     let current = new Array(m+1).fill(0)

     for(let j =0;  j< m + 1; j++){
        current[j] = 0
     }


     for (let i =1; i < n + 1; i++){
         for(let j=1; j < m+ 1; j++){
            if(String1[i - 1 ] ===  String2[j -1]){
            current[j] = 1 +  previous[j-1]
            }
            else{
                current[j] = Math.max(current[j -1], previous[j])
            }
         }

         previous = [...current]
     }

      return current[m]
      
  }
  
  // Example usage:
  const String1 = "AGGTAB";
  const   String2 = "GXTXAYB";
  const longest = longestSubsequence(String1, String2);
  console.log("Longest Subsequence Length: " + longest);
 