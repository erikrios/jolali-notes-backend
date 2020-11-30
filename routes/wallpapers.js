const express = require('express');
const scrape = require('../scrape/imagescrape');

const router = express.Router();

router.get('/', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send({ error: 'URL query is required' });
    try {
        const urls = [];

        s = await scrape(url);

        s('.post-body div a').each((index, element) => {
            urls[index] = $(element).attr('href');
        });

        res.send({ data: urls });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;