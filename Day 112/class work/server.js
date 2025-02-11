const express = require('express');
const homepage = require('./routes/homepage');
const about = require('./routes/about');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.use('/', homepage);
app.use('/', about);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});