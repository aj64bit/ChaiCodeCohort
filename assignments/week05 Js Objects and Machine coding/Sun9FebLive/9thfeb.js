// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content
const bike = {
  name: "Speed 400",
  company: "Triumph",
  cc: 398,
  color: "green",
  price: 3.4,
  engine: {
    color: "black",
    cooling: "liquid",
    exhost: 2,
    cylinder: 1
  }
}


// Problem: Access and print the name and type properties of the tea object
console.log(bike.name);
console.log(bike["color"]);

// Problem: Add a new property origin to the tea object
bike.origin = `British`;
console.log(bike.origin);
// Problem: Change the caffeine level of the tea object to "Medium"
bike.price = 3.2;
console.log(bike.price);

// Problem: Remove the type property from the tea object
delete bike.cc;
console.log(bike);


// Problem: Check if the tea object has a property origin
console.log("origin" in bike);

// Problem: Use a for...in loop to print all properties of the tea object
for (let i in bike) {
  console.log(bike[i]);
}
// Problem: Create a nested object representing different types of teas and their properties

const engine = {
  color: "black",
  cooling: "liquid",
  exhost: 2,
  cylinder: 1
}

// Added this into bike



// Problem: Create a copy of the tea object

const newBike = { ...bike }; //create shallow copy of 

console.log(`NewBike :`);
console.log(newBike);
bike.engine.color = "red"; // Set engine color of bike {Obj} to red and this change will reflect to copy [Not actully copy but ref] of bike to newBike.
console.log(bike);
console.log(newBike);

const bikeString = JSON.stringify(bike);
console.log(bikeString);
const bikeString2 = bikeString;
const newBike2 = JSON.parse(bikeString2);
bike.engine.color = "reddd";
console.log(newBike2);
console.log(bike); // I made color of bike engine "reddd" but this change not get reflected to the copy of object (newBike2) still remain same. because this is deep copy of bike obj.


// Problem: Add a custom method describe to the tea object that returns a description string


// Problem: Merge two objects representing different teas into one

