// 01.JS Conditionals
// Easy
// You are organizing a party and have a list of invited guests.But just before the party starts, a new friend decides to join.You need to add them to the guest list.
// Problem Statement: Create a function that adds a new guest to the guest list and returns the updated list.

// CODE

// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if (num % 2 === 0) {

        return "Even";

    } else {

        return "Odd";

    }
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { num } = JSON.parse(input);
    const result = checkEvenOdd(num);
    process.stdout.write(JSON.stringify(result));
});

// {"num":4}
// Even{"num":4}