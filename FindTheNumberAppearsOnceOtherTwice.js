function FindTheNumberAppearsOnceOtherTwice(array) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }

  //const keysArray = Object.keys(map);

  // const miniValue = Math.min(...keysArray.map(Number)); //keysArray.map(Number) is used to convert the keys from strings to numbers.

  //return keysArray[keysArray.length - 1];

  for (key in map) {
    if (map[key] === 1) return key;
  }
}

function FindTheNumberAppearsOnceOtherTwiceFromSet(array) {
  let duplicate = array.filter(
    (item) => array.indexOf(item) === array.lastIndexOf(item)
  );
  const result = Number(duplicate);
  return result;
}

function FindTheNumberAppearsOnceOtherTwiceUsingLinearSearch(array) {
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === num) count++;
    }


    if(count === 1){
         return num;
    }

  }

  console.log(num);
}

let array = [4, 1, 2, 1, 2];

console.log(FindTheNumberAppearsOnceOtherTwice(array));
console.log(FindTheNumberAppearsOnceOtherTwiceFromSet(array));
console.log(FindTheNumberAppearsOnceOtherTwiceUsingLinearSearch(array));
