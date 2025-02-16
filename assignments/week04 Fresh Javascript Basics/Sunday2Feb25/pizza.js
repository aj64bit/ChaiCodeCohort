let numberOfGuests = 7;
let pizzaSize;

//small <=2
// medium <=5
// large >5

if (numberOfGuests <= 2) {
    pizzaSize = "small";
} else if (numberOfGuests <= 5) {
    pizzaSize = "medium";
} else if (numberOfGuests > 5) {
    pizzaSize = "large";
}

console.log(`You should order ${pizzaSize}  pizza !!`);