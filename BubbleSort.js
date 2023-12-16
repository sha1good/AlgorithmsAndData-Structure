//When dealing with BubbleSort, we check from highest to lowest and swap adjacent

function BubbleSort(array) {

  for (let i = array.length - 1; i >= 0; i--) {
    let didSwap = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        didSwap = 1;
      }
    }
    
    if( didSwap === 0){
        break;
    }
    console.log("The array swap \n")
  }

  return array;
}

let array = [52,  46, 13, 25, 10, 5];

console.log(BubbleSort(array));
