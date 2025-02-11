const express = require('express');
const app = express();

const mainRouter = express.Router();

const userRouter = express.Router();


mainRouter.get('/', (req, res) => {
    res.send('Welcome to the main page!');
});

userRouter.get('/', (req, res) => {
    res.send('User Home Page');
});

userRouter.get('/profile', (req, res) => {
    res.send('User Profile Page');
});

mainRouter.use('/users', userRouter);

app.use('/', mainRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
