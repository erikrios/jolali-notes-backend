const mongoose = require('mongoose');
const express = require('express');
const _ = require('lodash');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send({ error: 'Invalid email or password.' });

        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPassword) return res.status(400).send({ error: 'Invalid email or password.' });

        const token = user.generateAuthToken();
        res.send(token);
    } catch (err) {
        res.send(500).send({ error: err.message });
    }
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });

    return schema.validate(req);
}

module.exports = router;