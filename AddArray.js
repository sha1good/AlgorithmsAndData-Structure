const addArray = (array1, array2) => {
  if (array1.length !== array2.length) {
    throw new Error("Array must have the same length for addition");
  }

  let results = [];

  for (let i = 0; i < array1.length; i++) {
    results.push(array1[i] + array2[i]);
  }

  return results;
};

const array1 = [2, 3];
const array2 = [5, 6, 2];
const sumArray = addArray(array1, array2);

console.log(sumArray);
