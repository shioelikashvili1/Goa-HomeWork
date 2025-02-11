const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Express სერვერი მუშაობს!');
});


app.listen(PORT, () => {
    console.log(`სერვერი გაშვებულია: http://localhost:${PORT}`);
});