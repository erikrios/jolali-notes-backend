const config = require('config');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const message = config.get('message');
    return res.send({ message });
});

module.exports = router;