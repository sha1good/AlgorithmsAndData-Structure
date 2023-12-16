

let X = [ 1, 2, 8];
let Y = [2, 1, 8,4]


// we need the lenght  of the both array

  function equalArray(X,Y){
 
    let m = X.length;
    let n =  Y.length;
    if(m !== n) return false;

    X.sort();
    Y.sort();

    for(let i=0; i< m; i++){

        if(X[i] !== Y[i]){
             return false;
        }
         return true;
    }
  }

   console.log(equalArray(X,Y));


const obj = { foo: "bar", baz: 42, b: { c: 2, d: 3,} };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const object = Object.fromEntries(arr);
  console.log(object); // { 0: "a", 1: "b", 2: "c" }