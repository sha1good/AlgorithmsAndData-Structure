function isBalanced(string) {
  const stack = [];

  for (let char of string) {
    if (char === "(") {
      stack.push(char);
    } else if (stack.pop() !== "(") {
      return false;
    }
  }

  return stack.length !== 0 ? false : true;
  
// let stack = [];
//    let  firstOut = null;

//   for(let bracket of string){
//     if(bracket === "(" || bracket === "{" || bracket === "["){
//       stack.push(bracket)
//     }else if (bracket === ")" || bracket === "}" || bracket === "]"){
//         firstOut = stack.pop();

//        if((bracket === ")" && firstOut !== "(") || 
//           (bracket === "}" && firstOut !== "{") || 
//          (bracket === "]" && firstOut !== "[")){
//           return false;
//          }
//     }
//   }

//  return stack.length !== 0 ? false : true;
}


console.log( isBalanced('') )
console.log( isBalanced('()') )
console.log( isBalanced('(())') )
console.log( isBalanced('()()(())') )

// not balanced parenthesis
console.log( isBalanced(' ') )
console.log( isBalanced('(') )
console.log( isBalanced(')') )
console.log( isBalanced(')()(') )
console.log( isBalanced('(()))') )