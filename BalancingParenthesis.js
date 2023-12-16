function balanceParanthesis(string) {
  let brackets = [];

  for (let bracket of string) {
    if (bracket === "(") {
      brackets.push(bracket);
    } else if (bracket === ")") {
      if (brackets[brackets.length - 1] === "(") {
        brackets.pop();
      } else {
        brackets.push("*");
      }
    }
  }

  return brackets.length;
}

const str = "()))";

console.log(balanceParanthesis(str));
