function RotateImageBy90DegreeBruteForceApproach(maxtrix) {
  let n = maxtrix.length;

  let rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(rotatedMatrix);
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      rotatedMatrix[j][n - i - 1] = maxtrix[i][j];
    }
  }

  return rotatedMatrix;
}

function RotateImageBy90DegreeBruteForceAnotherApproach(matrix) {
  let n = matrix.length;

  let m = maxtrix[0].length;

  let rows = new Array(n).fill(0);
  let columns = new Array(m).fill(0);

  return [rows, columns];
}

function RotateImageBy90DegreeUsingTransposeAndReverse(matrix) {
   
    // Transposing the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
             let temp = 0;
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reversing each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

let maxtrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// Output = Output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//Time Complexity: O(N*N) to linearly iterate and put it into some other matrix.

//Space Complexity: O(N*N) to copy it into some other matrix.
console.log(RotateImageBy90DegreeBruteForceApproach(maxtrix));
console.log("===========================================");

//Time Complexity: O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.

//Space Complexity: O(1).
console.log(RotateImageBy90DegreeUsingTransposeAndReverse(maxtrix));

//  Copy code
// // Declare a function that creates a matrix of size n x m
// function createMatrix(n, m) {
//   // Declare an empty array to hold the matrix
//   const matrix = [];

//   // Loop over each row
//   for (let i = 0; i < n; i++) {
//     // Declare an empty array to hold the row
//     const row = [];

//     // Loop over each column
//     for (let j = 0; j < m; j++) {
//       // Add a 0 to the row
//       row.push(0);
//     }

//     // Add the row to the matrix
//     matrix.push(row);
//   }

//   // Return the matrix
//   return matrix;
// }

// // Example usage: create a 3x3 matrix
// const matrix = createMatrix(3, 3);
// console.log(matrix); // [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
