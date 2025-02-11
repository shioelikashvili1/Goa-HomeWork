let myString = "50";
console.log(typeof myString); 

let myInteger = parseInt(myString);
console.log(typeof myInteger); 
console.log(myInteger); 



let myNumber = 50;
console.log(typeof myNumber);

let myString = myNumber.toString();
console.log(typeof myString); 
console.log(myString);




let person = {
    firstName: "shio",
    lastName: "elikashvili",
    age: 13,
    yearOfBirth: 2010,
    address: "varketili,georgia"
  };
  
  let sentence = `My name is ${person.firstName} ${person.lastName}, I am ${person.age} years old, born in ${person.yearOfBirth}, and currently live at ${person.address}.`;
  
  console.log(sentence);