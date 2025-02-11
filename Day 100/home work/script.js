// 1

setTimeout(() => {
    console.log("Hello, World!");
}, 3000);


// 2
setTimeout(() => {
    console.log("პირველი ფრაზა");
    setTimeout(() => {
        console.log("მეორე ფრაზა");
    }, 2000);
}, 1000);

// 3
setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 1000);
    }, 1000);
}, 1000);


// 4
function showMessage(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time);
}

showMessage("მშვიდობით", 3000);

// 5
setTimeout(() => {
    console.log("დრო ამოიწურა");
    setTimeout(() => {
        console.log("ხუმრობა");
    }, 1000);
}, 5000);

