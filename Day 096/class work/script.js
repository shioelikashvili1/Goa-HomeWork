const largeObject = {};

for (let i = 0; i < 150; i++) {
    largeObject[`id${i}`] = `id${i}`;
    largeObject[`name${i}`] = `name${i}`;
    largeObject[`email${i}`] = `email${i}@example.com`;
}

console.log(largeObject);
