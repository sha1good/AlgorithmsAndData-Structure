const balanceParanthese = (inputs) => {
  let brackets = [];
  let openParenthesis = "([{";
  let closeParenthesis = ")]";

  for (let input of inputs) {
    if (openParenthesis.includes(input)) {
      brackets.push(input);
    } else if (closeParenthesis.includes(input)) {
      if (brackets.length === 0) {
        return false; // Unbalance Parenthesis
      }

      let lastOpenParenthesis = brackets.pop();

      if (
        openParenthesis.indexOf(lastOpenParenthesis) !==
        closeParenthesis.indexOf(input)
      ) {
        return false;
      }
    }
  }

  return brackets.length === 0;
};

const string = "()))";

console.log(balanceParanthese(string));
console.log(balanceParanthese("()()(())"))
 console.log(balanceParanthese("(()))"))
