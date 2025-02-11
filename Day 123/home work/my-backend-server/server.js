const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');


dotenv.config();


const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('სერვერი მუშაობს წარმატებით! <3');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`სერვერი გაშვებულია პორტზე: ${PORT}`);
});
