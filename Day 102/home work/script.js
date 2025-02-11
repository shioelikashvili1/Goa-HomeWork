// 1
function* generateNumbers() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  const gen = generateNumbers();
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 

//  2
function* generateEvenNumbers() {
    let i = 0;
    while (true) {
      yield i;
      i += 2;
    }
  }
  
  const evenGen = generateEvenNumbers();
  console.log(evenGen.next().value); 
  console.log(evenGen.next().value); 
  console.log(evenGen.next().value); 
  
//   3
function* generateRandomNumbers() {
    while (true) {
      yield Math.random();
    }
  }
  
  const randomGen = generateRandomNumbers();
  console.log(randomGen.next().value);
  console.log(randomGen.next().value); 

//   4
function* generateLetters(word) {
    for (let letter of word) {
      yield letter;
    }
  }
  
  const letterGen = generateLetters("გამარჯობა");
  console.log(letterGen.next().value);
  console.log(letterGen.next().value); 
  console.log(letterGen.next().value);
  

//   5
function* generateNumberPassword() {
    const numbers = "0123456789";
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
      }
      yield password;
    }
  }
  
  const passwordGen = generateNumberPassword();
  console.log(passwordGen.next().value); 
  console.log(passwordGen.next().value);

//   6
function* generateComplexPassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+ქართული";
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      yield password;
    }
  }
  
  const complexPasswordGen = generateComplexPassword();
  console.log(complexPasswordGen.next().value);
  console.log(complexPasswordGen.next().value);
  
  