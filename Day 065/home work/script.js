const correctEmail = "example@example.com";
const correctPassword = "password123";

let enteredEmail = prompt("Enter your email:");
let enteredPassword = prompt("Enter your password:");

if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
    console.log("You have permission.");
} else {
    console.log("You don't have permission.");
}