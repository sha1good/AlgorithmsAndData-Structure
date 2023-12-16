function flatten(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  
  if (Array.isArray(value)) {
    return  flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce(
    (total, currentValue) => total.concat(flatten(currentValue)),
    []
  );
}

function flattenObject(object) {
  const flattenObj = {};

  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenObjectValue = flatten(value);

    if (valueIsObject) {
      Object.assign(flattenObj, flattenObjectValue);
    } else {
      flattenObj[key] = flattenObjectValue; 
    }
  }

  return flattenObj;
}

//const value = [1, 2, [3, 4, [5, 6]]];
const value = { a: 1, b: { c: 2, d: 3, e:{ f: 4}}}


console.log(flatten(value));
