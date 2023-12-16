function SpiralTraversalOfMatrix(array) {
  if (array.length === 0) return;

  let n = array.length;
  let m = array[0].length;

  let left = 0,
    right = m - 1;
  let top = 0,
    bottom = n - 1;
  let result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }

      left++;
    }
  }

     return result.join(", ")
}

let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(SpiralTraversalOfMatrix(array));
