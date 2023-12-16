var minRemoveToMakeValid = function (string) {
  string = string.split("");
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push(i);
      console.log(stack)
    } else if (string[i] === ")") {
      if (stack.length) {
        stack.pop();
        console.log(stack)
      } else {
        string[i] = "";
      }
    }
  }

  console.log(stack)

  for (let j of stack) {
    string[j] = "";
  }
 console.log(string)
  return string.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
