function caesarCipherEncryptor(string, key) {
  let newLettersCode = [];
  let newKey = key % 26;
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let s of string) {
    newLettersCode.push(getNewLetter(s, newKey, alphabet));
  }

  return newLettersCode.join("");
}

function getNewLetter(letter, key, alphabet) {
  let newLetterCode = alphabet.indexOf(letter) + key;

  if (newLetterCode <= 25) {
    return alphabet[newLetterCode];
  } else {
    return alphabet[newLetterCode % 26];
  }
}



 console.log(caesarCipherEncryptor("xyzaubnmm",57));