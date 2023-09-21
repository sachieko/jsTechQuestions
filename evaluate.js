// Do not modify this file, run using `node evaluate.js` to test your functions
import  chalk  from  'chalk';
import { isPalindrome, maxSubMatrix } from "./solutions.js";

const passString = chalk.green('Case Passed\n');
const failString = chalk.red('Case Failed\n');
console.log(chalk.underline.blue('Question 1 Results:\n'));

const notPal = 'I am the owner of a small island in the atlantic ocean';
const pal1 = 'racecar';
const pal2 = 'A man a plan a canal panama';

const notPalResult = isPalindrome(notPal);
const palResult1 = isPalindrome(pal1);
const palResult2 = isPalindrome(pal2);

console.log(`Case 1: Not Palindrome  ${notPalResult ? failString : passString}`);
console.log(`Case 2: Palindrome  ${palResult1 ? passString : failString}`);
console.log(`Case 3: Palindrome  ${palResult2 ? passString : failString}`);
console.log(chalk.yellow('--- Q1 End ---\n'));

console.log(chalk.underline.blue('Question 2 Results:\n'));

/*
1 3 1
2 3 1
1 1 1
*/
const matrix =  [[1, 3, 1],[2, 3, 1], [1, 1, 1]];
/*
1 2 2 1
2 4 4 5
1 1 1 1
*/
const matrix2 = [[1, 2, 2, 1], [2, 4, 4, 5], [1, 1, 1, 1]];

const { submatrix: resultMatrix, sum: sumResult1 } = maxSubMatrix(matrix, 2);
const { submatrix: resultMatrix2, sum: sumResult2 } = maxSubMatrix(matrix, 1);
const { submatrix: resultMatrix3, sum: sumResult3 } = maxSubMatrix(matrix2, 2);
const expectedMatrix1 = [[1, 3], [2, 3]];
const expectedSum= 9;
const expectedMatrix2 = [[3]];
const expectedSum2 = 3;
const expectedMatrix3 = [[2, 2], [4, 4]];
const expectedSum3 = 12;

const evalMatrix = (resultMatrix, expectedMatrix, sumResult, expectedSum) => {
  console.log(chalk.cyan('Comparing Matrices: '), JSON.stringify(resultMatrix), ' vs ', JSON.stringify(expectedMatrix));
  if (!resultMatrix || !sumResult || !expectedMatrix || !expectedSum) {
    return false;
  }
  if (sumResult !== expectedSum) {
    return false;
  }
  if (resultMatrix.length !== expectedMatrix.length) {
    return false;
  }
  for (let i = 0; i < resultMatrix.length; i++) {
    if (resultMatrix[i].length !== expectedMatrix[i].length) {
      return false;
    }
    for (let j = 0; j < resultMatrix[i].length; j++) {
      if (resultMatrix[i][j] !== expectedMatrix[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const caseOne = evalMatrix(resultMatrix, expectedMatrix1, sumResult1, expectedSum);
const caseTwo = evalMatrix(resultMatrix2, expectedMatrix2, sumResult2, expectedSum2);
const caseThree = evalMatrix(resultMatrix3, expectedMatrix3, sumResult3, expectedSum3);

console.log(`Case 1: 2D array ${caseOne ? passString : failString}`);
console.log(`Case 2: 1D array ${caseTwo ? passString : failString}`);
console.log(`Case 2: 1D array ${caseThree ? passString : failString}`);

console.log(chalk.yellow('--- Q2 End ---'));
