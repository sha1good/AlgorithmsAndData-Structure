function minOperations(n){
     const arr = [];

     for(let i=0; i < n; i++){
        arr[i] = ( 2 * i) + 1;
     }

     let counter = 0;
     let  front = 0;
     let end = n - 1;

     for(let i = 0; i < n/2; i++){
         while(arr[front] !== arr[end]){
             arr[front] +=1;
             arr[end]  -=1;
              counter++;
         }
        front++;
        end++;
     }

      return counter;
 }


   console.log(minOperations(3));
 console.log("Helloword");