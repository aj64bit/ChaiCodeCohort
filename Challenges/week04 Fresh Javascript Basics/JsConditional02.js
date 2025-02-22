// 02. JS Conditionals

// Easy

// You are given three numbers. Determine the largest among them.

// Problem Statement:

// Write a function that takes three numbers and returns the largest using if-else.

// CODE

// You just need to implement the checkEvenOdd function
// You just need to implement the findLargest function
function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a > b && a> )
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { a, b, c } = JSON.parse(input);
    const result = findLargest(a, b, c);
    process.stdout.write(JSON.stringify(result));
  });

//   Input:

//   (a: 10, "b: 20, "c": 15
  
//   Expected Output:
  
//   20