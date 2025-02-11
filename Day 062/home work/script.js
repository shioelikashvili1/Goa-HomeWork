
if (30 > 10) {
    console.log('რიცხვი მეტია 10-ზე')
}
else {
    console.log('რიცხვი არ არის 10-ზე მეტი')
}

let n = 2;
if (n > 0) {
    console.log('დადებითია')
}
else if (n < 0) {
    console.log('უარყოფითი')
}
else {
    console.log('ნულია')
}


let point = prompt('შემოიტანეთ ქულა ', );
if (point == 100) {
   alert('თქვენ დაგიფინანსდათ სწავლა სრულია')
}
else if (point > 70){
   alert('თქვენ დაგიფინანსდათ სწავლა 3000 ლარით')
}
else if (point > 40){
    alert('თქვენ დაგიფინანსდათ სწავლა 1000 ლარით')
}
else if (point < 20){
        alert('თქვენ არ დაფინანსდათ სწავლა')
}