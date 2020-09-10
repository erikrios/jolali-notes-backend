const mongoose = require('mongoose');
const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }).select('-password -__v');
        res.send(user);
    } catch (err) {
        res.send(500).send({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ error: 'User already registered.' });

        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = user.generateAuthToken();
        res.header('Auth-Token', token).send(_.pick(user, ['_id', 'name', 'email']));
    } catch (err) {
        res.send(500).send({ error: err.message });
    }
});

module.exports = router;