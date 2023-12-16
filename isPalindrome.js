const isPalindrome = (s) => {
  let k = 0;
  let l = s.length - 1;
  let isPalindrome = true;

  while (k <= l) {
    if (!(s.charAt(k) === s.charAt(l))) {
      isPalindrome = false;
    }
    k++;
    l--;
  }

  return isPalindrome;
};

console.log(isPalindrome("SSmadamSSS"));
