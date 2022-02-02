const config = require('./utils/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const loginRouter = require('./controllers/login');
const usersRouter = require('./controllers/users');
const appointmentsRouter = require('./controllers/appointments')


logger.info('connecting to ', config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI)
    .then(result => {
        logger.info('connected to MONGODB')
    })
    .catch(e => {
        logger.error('error:', e.message)
    });

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/appointments', appointmentsRouter);


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;