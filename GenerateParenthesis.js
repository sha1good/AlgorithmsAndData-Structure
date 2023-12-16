function generateBalancedParentheses(n) {
  const results = [];

  const generate = (bracket, open, close) => {
    if (bracket.length === 2 * n) {
      results.push(bracket);
      return;
    }

    if (open < n) {
      generate(bracket + "{", open + 1, close);
    }

    if (close < open) {
      generate(bracket + "}", open, close + 1);
    }
  };

  generate("", 0, 0);
  return results;
}


 console.log(generateBalancedParentheses(3))
