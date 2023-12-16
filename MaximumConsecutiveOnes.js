










 function MaximumConsecutiveOnes(nums){
      
     let countOnes = 0;
     let maximumOnes = 0;

     for(let i=0; i < nums.length; i++){
        if(nums[i] === 1){
             countOnes+=1;
        }else{
             countOnes = 0;
        }

        maximumOnes = Math.max(maximumOnes, countOnes)
     }

      return maximumOnes;
 } 



let array = [1,1,0,1,1,1]

 console.log(MaximumConsecutiveOnes(array))