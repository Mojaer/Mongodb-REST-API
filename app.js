const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const useRouter = require('./routes/api_routes');
require('./config/Db');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(useRouter);


app.use((err, req, res, next) => {
    res.status(404).send(
        'Router is not available'
    );
})

app.use((err, req, res, next) => {
    res.status(500).send(
        'something is Broken'
    );
})

module.exports = app