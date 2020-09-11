const express = require('express');
const moment = require('moment');
const { Note, validate } = require('../models/note');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({ 'ownerId._id': req.user._id }).select('-__v').sort('-date');
        res.send(notes);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    const id = req.params.id;

    try {
        const note = await Note.findOne({ 'ownerId._id': req.user._id }, { _id: id }).select('-__v');
        if (!note) return res.status(404).send({ error: 'Note with given id was not found.' });
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            ownerId: {
                _id: req.user._id,
                name: req.user.name
            },
            date: Date.now(),
            time: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
        });

        await note.save();
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const id = req.params.id;

    try {
        const note = await Note.findOneAndUpdate({ 'ownerId._id': req.user._id }, { _id: id }, {
            $set: {
                'title': req.body.title,
                'description': req.body.description,
                'date': Date.now(),
                'time': moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
            }
        }, { new: true });

        if (!note) return res.status(404).send({ error: 'Note with given id was not found.' });
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;

    try {
        const note = await Note.findOneAndDelete({ 'ownerId._id': req.user._id }, { _id: id });
        if (!note) return res.status(404).send({ error: 'Note with given id was not found.' });
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;