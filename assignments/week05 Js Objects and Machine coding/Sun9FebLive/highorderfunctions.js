const ages = [12, 22, 32, 1, 44, 76, 16, 18, 19, 7, 4];

const ad = ages.filter(age => age >= 18);

console.log(ad);

const mi = ages.map(mm => {
    if (mm % 2 == 0) console.log(`${mm} is even`);
    else console.log(`${mm} is odd`);
});
console.log(mi);


function fetchData(callback) {
    setTimeout(() => {
        console.log("Data received!");
        callback();
    }, 1000);
}

fetchData(() => console.log("Processing data..."));

console.log(this);