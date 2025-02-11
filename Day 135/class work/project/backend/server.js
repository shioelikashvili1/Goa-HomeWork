const express = require('express');
const cors = require('cors'); 
const path = require('path');

const app = express();
const port = 5000;


app.use(cors()); 


app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/api/images', (req, res) => {
  const images = [
    'http://localhost:5000/images/iphone.png', 
  ];
  res.json(images); 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});