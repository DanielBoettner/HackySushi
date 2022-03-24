require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

var corsOptions = {
    origin: process.env.URL,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


module.exports = app;

