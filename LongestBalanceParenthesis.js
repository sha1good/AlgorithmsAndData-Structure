function longestBalancedSubstring(string) {
  let maxLength = 0;
  let stack = [];
  stack.push(-1);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        let balanceSubstringStartIndex = stack[stack.length - 1];
        currentLength = i - balanceSubstringStartIndex;
        maxLength = Math.max(currentLength, maxLength);
      }
    }
  }

  return maxLength;
}



console.log(longestBalancedSubstring("(())))"))