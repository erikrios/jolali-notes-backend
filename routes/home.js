const config = require('config');
const express = require('express');
const marked = require('marked');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    const path = __dirname + '/../README.md';
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) return res.status(500).send({ error: err.message });
        res.send(marked(data.toString()));
    });
});

module.exports = router;