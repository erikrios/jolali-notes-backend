const express = require('express');
const moment = require('moment');
const { Note, validate } = require('../models/note');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const notes = await Note.find().select('-__v').sort('-date');
        res.send(notes);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const note = await Note.findOne({ _id: id }).select('-__v');
        if (!note) return res.status(404).send({ error: 'Note with given id was not found.' });
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            date: Date.now(),
            time: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
        });

        await note.save();
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const id = req.params.id;

    try {
        const note = await Note.findOneAndUpdate({ _id: id }, {
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

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const note = await Note.findOneAndDelete({ _id: id });
        if (!note) return res.status(404).send({ error: 'Note with given id was not found.' });
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;