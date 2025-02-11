const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;


app.get('/about', (req, res) => {
    res.send('<h1>ეს არის About გვერდი</h1>');
});


app.get('/homepage', (req, res) => {
    res.end(`
        <h1>მოგესალმებით Homepage-ზე!</h1>
        <a href="/about">About Page</a><br>
        <a href="/random">Random Values Page</a>
    `);
});


const folderPath = path.join(__dirname, 'randomFiles');


if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}


const randomWords = ["გამარჯობა", "სალამი", "როგორ ხარ", "კარგად", "ნახვამდის"];

for (let i = 1; i <= 20; i++) {
    const filePath = path.join(folderPath, `file${i}.txt`);
    const randomSentence = `${randomWords[Math.floor(Math.random() * randomWords.length)]} - ფაილი ${i}`;
    fs.writeFileSync(filePath, randomSentence, 'utf8');
}


app.get('/random', (req, res) => {
    const files = fs.readdirSync(folderPath);
    let fileContents = '';
    files.forEach(file => {
        const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
        fileContents += `<p>${content}</p>`;
    });
    res.send(`<h1>Random ფაილების შემცველობა:</h1>${fileContents}`);
});


app.listen(port, () => {
    console.log(`სერვერი გაშვებულია: http://localhost:${port}`);
});
