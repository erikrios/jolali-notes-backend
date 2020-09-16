const express = require('express');

const home = require('../routes/home');
const notes = require('../routes/notes');
const users = require('../routes/users');
const auth = require('../routes/auth');
const bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/', home);
    app.use('/api/notes', notes);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
}