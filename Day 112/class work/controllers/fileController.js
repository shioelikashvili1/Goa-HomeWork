const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '../randomFiles');
const randomWords = ["გამარჯობა", "სალამი", "როგორ ხარ", "კარგად", "ნახვამდის"];

function generateRandomFiles() {
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    for (let i = 1; i <= 20; i++) {
        const filePath = path.join(folderPath, `file${i}.txt`);
        const content = `${randomWords[Math.floor(Math.random() * randomWords.length)]} - File ${i}`;
        fs.writeFileSync(filePath, content);
    }
}

module.exports = { generateRandomFiles };
