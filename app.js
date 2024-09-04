const express = require('express');
const path = require('path');
const morgan = require('morgan');
const myRouter = require('./routes/myRouter');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Scripts')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', myRouter);

module.exports = app;