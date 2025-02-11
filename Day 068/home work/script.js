// 1. დაბეჭდეთ რიცხვები 1-დან 10-მდე.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2. დაბეჭდეთ ლუწი რიცხვები 1-დან 20-მდე.
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  // 3. იპოვეთ რიცხვების ჯამი 1-დან 50-მდე.
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    sum += i;
  }
  console.log("ჯამი 1-დან 50-მდე: " + sum);
  
  // 4. შექმენით რიცხვის გამრავლების ცხრილი (მაგალითად, 5-ისთვის).
  const number = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
  
  // 5. შეამოწმეთ რიცხვი მარტივია თუ არა.
  const checkNumber = 29; // ჩასვით თქვენი რიცხვი
  let isPrime = true;
  if (checkNumber > 1) {
    for (let i = 2; i < checkNumber; i++) {
      if (checkNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(
      `${checkNumber} ${isPrime ? "მარტივი რიცხვია" : "არ არის მარტივი რიცხვი"}`
    );
  } else {
    console.log(`${checkNumber} არ არის მარტივი რიცხვი`);
  }
  
  // 6. დაბეჭდეთ რიცხვები 100-დან 0-მდე.
  for (let i = 100; i >= 0; i--) {
    console.log(i);
  }
  
  // 7. გაიგეთ, რამდენი ასოსგან შედგება "ILOVEGOA".
  const text = "ILOVEGOA";
  console.log(`"${text}" შედგება ${text.length} ასოსგან.`);
  
  // 8. სათითაოდ ყველა ასოს დაბეჭდვა ტექსტიდან.
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
  