function isAnagram(String1, String2) {
  //   const normalize = (str) => {
  //     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  //   };

  let string1 = String1.replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  console.log(string1);

  let string2 = String2.replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

    console.log(string2);

  return string1 === string2;
}

console.log(isAnagram("indian", "ndiani"));
// should be true
console.log(isAnagram("Night", "Thing"));
console.log(isAnagram("Statue of Liberty", "Built to stay free"));

// should be false
console.log(isAnagram("Night", "Light"));
console.log(isAnagram("Statue of Liberty", "eiffel tower"));
