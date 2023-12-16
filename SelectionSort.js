
function SelectionSort (array) {

    for(let i=0; i <= array.length-2; i++){
        
        let min = i;
      

        for(let j=i; j<=array.length -1; j++){
           if(array[j] < array[min]){
               min = j;
           }
        }
    

         console.log("The array runs\n" + i)
        let temp = array[min];
        array[min] = array[i]
        array[i] = temp;
       
    }

   return array;
 }

let array = [9, 13, 20, 25, 46, 52]

console.log(SelectionSort(array))


