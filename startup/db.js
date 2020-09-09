const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    const connectionString = config.get('db');
    console.log(connectionString);

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log('Connected to database...') })
        .catch(ex => console.log(ex));
}