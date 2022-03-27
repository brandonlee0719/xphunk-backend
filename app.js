const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
require('./connection')
const indexRouter = require('./routes/index');
const xphunkRouter = require('./routes/xphunk');

const app = express();
const server = http.createServer(app);
const port = 8000;

const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
    ],
    allowedHeaders: [
        'Content-Type',
    ],
};

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOpts));
app.use('/api', xphunkRouter);
app.use('/', indexRouter);

server.listen(
    port, '0.0.0.0',
    () => console.log(`app listening...`)
);

module.exports = app;
