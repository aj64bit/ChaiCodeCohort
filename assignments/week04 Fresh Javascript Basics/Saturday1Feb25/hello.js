console.log("Hello from chaiCode");
sayHello();
function sayHello() {
    console.log("Hello from chaiCode [From Factoty]");
}
sayHello();
function bringBrush(itne) {
    console.log(`Hanji, Le aaya ${itne} Brush`);
}
bringBrush(5);

function addTow(yehe1, yehe2) {
    const addn = yehe1 + yehe2;
    console.log(`Hamari addition hui ${addn}`);
    return addn;
}
addTow(7, 3);
console.log(`Ye return hui addition ` + addTow(1, 2));