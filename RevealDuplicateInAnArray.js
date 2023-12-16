



   const findDuplicates = (array) => {
      const  duplciates = []
      const seen =  {}

     for( let i=0; i< array.length; i++){
       if(seen[array[i]]){
           if(!duplciates.includes(array[i])){
              duplciates.push(array[i])
           }
       }else{
         seen[array[i]] = true;
       }
     }
    
     return duplciates;
   }


const myArray = [1, 2, 2, 3, 4, 4, 5];
//const duplicateElements = ;
console.log(findDuplicates(myArray));