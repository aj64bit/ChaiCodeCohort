console.log('startd..');

let s = setInterval(g, 1000);
function g() {
    console.log("HELLO");
}

setTimeout(function () {
    console.log('Hello stopped ..');
    clearInterval(s);
}, 5000);

function showTime() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
}
setInterval(showTime, 1000);