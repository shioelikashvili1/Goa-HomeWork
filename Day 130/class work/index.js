const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
