function solution(src) {
  let words = src.split(" ");
  console.log(words);

  const newWord = words.map((word) => {
    const Parts = word.split("_");

    const capitalizePart = Parts.map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    });

    console.log(capitalizePart.join(""));
    return capitalizePart.join("");
  });

  return newWord.join(" ");
}

let src = "This is the ___doc_string__ for __secret_fun";
let result = solution(src);

console.log(result);

function convertToCamelCase(src) {
    const words = src.split('_');
    let result = words[0]; // The first word doesn't change

    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }

    return result;
}

const src1 = "This is the ___doc_string__ for __secret_fun";
const converted = convertToCamelCase(src1);
console.log(converted);


function convertString(src) {
    // Split the string into an array of words
    var words = src.split(' ');
  
    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Check if the word contains underscores
      if (word.includes('_')) {
        // Split the word into an array of parts separated by underscores
        var parts = word.split('_');
  
        // Convert each part to title case
        for (var j = 0; j < parts.length; j++) {
          var part = parts[j];
  
          // Convert the first character to uppercase and the rest to lowercase
          var convertedPart = part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  
          // Replace the part in the array
          parts[j] = convertedPart;
        }
  
        // Join the parts back into a word using empty string as separator
        var convertedWord = parts.join('');
  
        // Replace the word in the array
        words[i] = convertedWord;
      }
    }
  
    // Join the words back into a string using space as separator
    var convertedString = words.join(' ');
  
    return convertedString;
  }
  
  // Example usage
  var srcr = "This is the ___doc_string__ for __secret_fun";
  var converted1 = convertString(srcr);
  console.log(converted1);