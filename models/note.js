const mongoose = require('mongoose');
const Joi = require('joi');
const moment = require('moment');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 1024,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    time: {
        type: String,
        default: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
});

const Note = mongoose.model('Note', noteSchema);

function validateNote(note) {
    const schema = Joi.object({
        title: Joi.string().min(1).max(50).required(),
        description: Joi.string().min(1).max(1024).required()
    });

    return schema.validate(note);
}

module.exports = {
    Note: Note,
    validate: validateNote
};