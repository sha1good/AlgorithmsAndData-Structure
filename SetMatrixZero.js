function markRow(matrix, columns, i) {
  for (let j = 0; j < columns; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function markColumn(matrix, rows, j) {
  for (let i = 0; i < rows; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}
function SetMatrixZeroBruteForce(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;

  // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, columns, i);
        markColumn(matrix, rows, j);
      }
    }
  }

  // Set -1 in the rows and cols to 0.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix; //.join(" ");
}

function SetMatrixZeroBettersolution(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0); // row array
    const col = new Array(m).fill(0); // col array

    // Traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // mark ith index of row with 1:
                row[i] = 1;

                // mark jth index of col with 1:
                col[j] = 1;
            }
        }
    }

    // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

let matrix = [
    [1, 1, 1], [1, 0, 1], [1, 1, 1]
];

//Time Complexity: O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
//Reason: Firstly, we are traversing the matrix to find the cells with the value 0. It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1. This process takes O(N+M). So, combining this the whole process, finding and marking, takes O((N*M)*(N + M)).
//Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

//Space Complexity: O(1) as we are not using any extra space.
console.log(SetMatrixZeroBruteForce(matrix));

console.log("========== Better Solution ====================");
//Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
//Reason: We are traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

//Space Complexity: O(N) + O(M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
//Reason: O(N) is for using the row array and O(M) is for using the col array.
console.log(SetMatrixZeroBettersolution(matrix));
