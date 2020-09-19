const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    const path = __dirname + '/../ads/app-ads.txt';
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) return res.status(500).send({error: err.message});
        res.send(data);
    });
});

module.exports = router;