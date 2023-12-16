let results = [];

function buildcombination(left, right, string) {
  
  // if no more brackets can be added then add the final balanced string
  if (left === 0 && right === 0) {
    return results.push(string);
  }
  // if we have a left bracket that is left we add it
  if (left > 0) {
    buildcombination(left - 1, right + 1, string + "(");
  }

  // if we have a right bracket that is  left we add it
  if (right > 0) {
    buildcombination(left, right - 1, string + ")");
  }

  
  
}
buildcombination(3, 0, "")
console.log(results);
