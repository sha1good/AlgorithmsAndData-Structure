function semordnilap(words) {
  const wordSet = new Set();
  const pairs = [];

  for (let word of words) {
    let reversed = word.split("").reverse().join("");
    console.log(reversed);
    if (wordSet.has(reversed)) pairs.push([word, reversed]);
    else wordSet.add(word);
  }
  console.log(wordSet);
  return pairs;
}

words = ["diaper", "abc", "test", "cba", "repaid"];

console.log(semordnilap(words));
