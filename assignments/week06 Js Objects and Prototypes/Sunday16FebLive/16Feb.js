// 16Feb
Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
}

function greet(name) {
    return `Hello ${name}`;
}
greet.describe();
greet("Ajay");
function masalachai() { }
masalachai.describe();

(function () {
    console.log("Hello ajay");
})()

// window.alert("Hello")
