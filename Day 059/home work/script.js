let userName = prompt("What's your name?");
let userLastName = prompt("Whats your lastname?");
let userAge = prompt("What's your age?");
let userAdress = prompt("What's your adress?");

let fatherName = prompt("What's your father's name?");
let fatherAge = prompt("What's your father's age?");

let motherName = prompt("What's your mother's name?");
let motherAge = prompt("What's your mother's age?");

let grandmaName = prompt("What's your grandma's name?");
let grandmaAge = prompt("What's your grandma's age?");

let grandpaName = prompt("What's your grandpa's name?");
let grandpaAge = prompt("What's your grandpa's age?")

console.log(
    `Hello ${userName, userLastName}! Your age is ${userAge}, and your adress is ${userAdress}. Your father's name is ${fatherName}, his age is ${fatherAge}. Your mother's name is ${motherName}, her age is ${motherAge}. Your grandma's name is ${grandmaName}, her age is ${grandmaAge}. Your grandpa's name is ${grandpaName}, his age is ${grandpaAge}.`
);





let userage = Number(prompt("What's your age?"));
let fatherage = Number(prompt("What's your father's age?"));
let motherage = Number(prompt("What's your mother's age?"));
let grandmaage = Number(prompt("What's your grandma's age?"));
let grandpaage = Number(prompt("What's your grandpa's age?"));

let dro = Number(prompt("How much years would you like to travel into?"));

function travelIntoTime(dro){
    console.log(`You will be ${userAge + dro}`)
    console.log(`Your father will be ${fatherage + dro}`)
    console.log(`Your mother will be ${motherage + dro}`)
    console.log(`Your grandma will be ${grandmaage + dro}`)
    console.log(`Your grandpa will be ${grandpaage + dro}`)
}

dro()






