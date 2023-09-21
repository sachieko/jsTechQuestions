/*
1.
Write a JavaScript function that checks if a given string is a palindrome.

Input: "string"
Output: true or false boolean

Ex: isPalindrome('I am the owner of a small island in the atlantic ocean'); >> false
    isPalindrome('racecar'); >> true
    isPalindrome('a man a plan a canal panama'); >> true
*/

//TO DO: return true or false
const isPalindrome = function(str) {

};

/*
2. 
Write a JavaScript function that given a 2D matrix of integers and an integer K, 
it will find the maximum sum submatrix of a size K x K within the matrix and its sum.

Inputs: 2D array, ex:
        [[1, 2, 1],
          [2, 3, 1],
          [1, 1, 1]] 

         K, ex K = 2
Output example: 
        {
          submatrix:
            [[1, 2],
            [2, 3]]
          sum: 8
        }
      
    You may assume that k will always be a positive integer, and the matrix will always have at least 1 element, ie: [[1]]
*/

// TO DO: return { submatrix, sum }
const maxSubMatrix = function(matrix, K) {
  const submatrix = [[]];
  let sum = 0;

  return { submatrix, sum };
};

export { isPalindrome, maxSubMatrix };