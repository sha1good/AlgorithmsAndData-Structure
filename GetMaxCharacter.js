function getMaxChar(string) {
  let map = {};
  let max = 0;
  let maxChar = "";

  for (let char of string) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  console.log(map);

  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(getMaxChar("aac "));
console.log(getMaxChar("aaabbc "));
console.log(getMaxChar("aaabbBBc "));
console.log(getMaxChar("a a a b b B B c"));
console.log(getMaxChar("a a a b b B B c **********"));



