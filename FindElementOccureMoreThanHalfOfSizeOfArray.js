function FindTheMajorityElementOccursMoreThanNTimes(array, N) {
  let map = {};
  let maxKey;

  let maxValue = -Infinity;

  for (let i = 0; i < N; i++) {
    if (map[array[i]]) {
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }

  console.log(map);

  for (let key in map) {
    value = map[key];

    console.log(`Key: ${key}, Value: ${value}`);
  }

  // // return map;

  for (let [key, values] of Object.entries(map)) {
    console.log(`Key: ${key}, Values: ${values}`);
  }

  for (let key in map) {
    if (map.hasOwnProperty(key)) {
      let value = map[key];

      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
  }

  return maxKey;
}

function FindTheMajorityElementOccursMoreThanNTimesWithMapObject(array) {
  let newMap = new Map();
  let N = array.length;

  for (let i = 0; i < N; i++) {
    if (newMap.has(array[i])) {
      newMap.set(array[i], newMap.get(array[i]) + 1);
    } else {
      newMap.set(array[i], 1);
    }
  }

  // Searching for the majority element in the map
  for (let [key, value] of newMap) {
    if (value > Math.floor(N / 2)) {
      return key;
    }
  }

  return -1;
}

//Moore's Voting Algorithms

function FindTheMajorityElementOccursMoreThanNTimesWithOptimalSolution(array) {
  let N = array.length;
  let element;
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (count === 0) {
      count = 1;
      element = array[i];
    } else if (array[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  //return element;

  // In a situation whereby the majority of the element is not assumed to be part of the array
  //That is when you have to use the second loop or iterate again

  
  for (let i = 0; i < N; i++) {
    if (array[i] === element) count++;

    if (count > Math.floor(N / 2)) {
      return element;
    }
  }

  return -1;
}

let N = 9,
  array = [2, 2, 1, 1, 1, 1, 1, 2, 2];

console.log(FindTheMajorityElementOccursMoreThanNTimes(array, N));

console.log("==================================================");
console.log(FindTheMajorityElementOccursMoreThanNTimesWithMapObject(array));

console.log("The  Most Optimal Solution");
console.log(
  FindTheMajorityElementOccursMoreThanNTimesWithOptimalSolution(array)
);
