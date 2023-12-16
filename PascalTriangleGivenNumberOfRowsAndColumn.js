function nCr(n, r) {
  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }

  return result;
}

function PascalTriangleGivenNumberOfRowsAndColumn(r, c) {
  const element = nCr(r - 1, c - 1);
  return element;
}

function nCombinationr(n, r) {
  console.log("Printed r " + r);

  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }

  return result;
}

function PascalTrianglePrintTheNthRow(r) {
  for (let c = 1; c <= r; c++) {
    console.log("Printing C" + c);
    console.log(nCombinationr(r - 1, c - 1) + " ");
  }
}

function rowCombinationColumn(r, c) {
  let result = 1;

  for (let i = 0; i < c; i++) {
    result = result * (r - i);
    result = result / (i + 1);
  }

  return parseInt(result);
}

function PascalTrianglePrintTheEntireRow(rows) {
  let result = [];

  for (let row = 1; row <= rows; row++) {
    let tempList = [];
    for (let col = 1; col <= row; col++) {
      tempList.push(rowCombinationColumn(row - 1, col - 1));
    }

    result.push(tempList);
  }

  return result;
}

function generatingRow(row) {
  let result = 1;

  let resultRow = [1];

  for (let col = 1; col < row; col++) {
    result = result * (row - col);
    result = result / col;
    resultRow.push(result);
  }

  return resultRow;
}

function PascalTrianglePrintTheEntireRowOptimalSolution(rows) {
  let result = [];

  for (let row = 1; row <= rows; row++) {
    result.push(generatingRow(row));
  }

  return result;
}

const r = 5; // row number
const c = 3; // col number

//Time Complexity: O(c), where c = given column number.
//Reason: We are running a loop for r times, where r is c-1.

//Space Complexity: O(1) as we are not using any extra space.

console.log(PascalTriangleGivenNumberOfRowsAndColumn(r, c));

console.log("==================================================");

//Time Complexity: O(n*r), where n is the given row number, and r is the column index which can vary from 0 to n-1.
//Reason: We are calculating the element for each column. Now, there are total n columns, and for each column, the calculation of the element takes O(r) time where r is the column index.

//Space Complexity: O(1) as we are not using any extra space.
PascalTrianglePrintTheNthRow(r, c);

//When the variation is  of the type Print the entire  Pascal Triangle
//Time Complexity of O(N3)
//Space Complexity: In this case, we are only using space to store the answer.
//That is why space complexity can be still considered as O(1).
console.log(PascalTrianglePrintTheEntireRow(r));


//Time Complexity: O(n2), where n = number of rows(given).
//Reason: We are generating a row for each single row. The number of rows is n. And generating an entire row takes O(n) time complexity.

//Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can still be considered as O(1).
console.log(PascalTrianglePrintTheEntireRowOptimalSolution(r));
