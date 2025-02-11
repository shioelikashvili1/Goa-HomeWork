// Task 1

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

person.age = 35; 
person.address.country = "Canada"; 


person.email = "john.doe@example.com";


delete person.address.country;

console.log(person);



// Task 2

let numbers = [1, 2, 3, 4, 5, 6];


numbers.push(7);


numbers.shift();

let indexOfFour = numbers.indexOf(4);


let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Updated numbers array:", numbers);
console.log("Index of number 4:", indexOfFour);
console.log("Array of even numbers:", evenNumbers);


// Task 3

let students = [
    { name: "Alice", score: 75 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 60 }
];


students.push({ name: "David", score: 90 });

let highestScoringStudent = students.reduce((prev, current) => {
    return (prev.score > current.score) ? prev : current;
});


let highScoringStudents = students
    .filter(student => student.score > 80)
    .map(student => student.name);


console.log("Updated students array:", students);
console.log("Highest scoring student:", highestScoringStudent);
console.log("Students scoring more than 80:", highScoringStudents);




// Task 4

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let value = matrix[2][1];


matrix[0][0] = 10; 


console.log("Matrix after modification:", matrix);
console.log("Value in third row, second column:", value);
