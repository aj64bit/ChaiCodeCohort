let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumOf(myArray));