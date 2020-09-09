const express = require('express');
const app = express();

const home = require('./routes/home');

app.use(express.json());
app.use('/', home);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}...`) });