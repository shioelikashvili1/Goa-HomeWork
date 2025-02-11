const express = require('express');
const router = express.Router();

router.get('/homepage', (req, res) => {
    res.send(`
        <h1>Welcome to Homepage</h1>
        <a href="/about">About Page</a><br>
        <a href="/random">Random Files Page</a>
    `);
});

module.exports = router;