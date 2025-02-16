// PO challenge 1
// Easy
// You and your friend are baking cupcakes for a party. You've filled up two trays, each with a certain number of cupcakes. You want to know the total number of cupcakes you have before you frost them.
// Challenge
// Create a function that adds two numbers (representing cupcakes on each tray) and retums the total
// You just need to implement the totalCupcakes function

// Code

function totalCupcakes(trayOne, trayTwo) {
    // Return the sum of trayOne and trayTwo
    return trayOne + trayTwo;

}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    // Parse input (expected to be JSON string format),
    // which should contain trayOne and trayTwo
    const { trayOne, trayTwo } = JSON.parse(input);

    // Call our function
    const result = totalCupcakes(trayOne, trayTwo);

    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above



// Test Case JSON
// {"trayOne":5,"trayTwo":7}
//  OutPut : 12
// {"trayOne":3,"trayTwo":7}
//  OutPut : 10