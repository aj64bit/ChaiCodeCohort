// Problem: Create an array containing different types of teas

let chaichai = new Array("Black", "White", "Green", "Adrak", "Elaichi", "Oolong");
console.log(chaichai);
// Problem: Add "Chamomile Tea" to the existing list of teas
chaichai.push("Chamomile");
// chaichai.unshift(`Chamomile`);
// chaichai.splice(`Chamomile`);
// chaichai[chaichai.length] = `Chamomile`;
// let chaichai2 = [...chaichai, `Chamomile`]
console.log(chaichai);
// console.log(chaichai2);



// Problem: Remove "Oolong Tea" from the list of teas

let target = chaichai.indexOf("Oolong");
if (target !== -1) chaichai.splice(target, 1);
console.log(target);
console.log(chaichai);


// Problem: Filter the list to only include teas that are caffeinated

const caffeinated = chaichai.filter((tea) => tea !== "Green");
console.log(caffeinated);

// Problem: Sort the list of teas in alphabetical order
console.log(chaichai.sort());



// Problem: Use a for loop to print each type of tea in the array
for (let i in chaichai) {
    console.log(chaichai[i]);
}



// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")

let count = 0;
for (let i = 0; i < chaichai.length; i++) {
    if (chaichai[i] !== 'Green') {
        count++;
    }
}
console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase

let newChai = new Array;
for (let i in chaichai) {
    newChai.push(chaichai[i].toUpperCase());
}
console.log(newChai);



// Problem: Use a for loop to find the tea name with the most characters
let len = 0;
let longChai = null;
for (let i in chaichai) {
    if (chaichai[i].length > len) {
        longChai = chaichai[i];
        len = chaichai[i].length;
    }
}
console.log(`We have longest chai of ${len} long that is ${longChai}`);


// Problem: Use a for loop to reverse the order of the teas in the array

for (let i = chaichai.length - 1; i >= 0; i--) {
    console.log(chaichai[i]);
}