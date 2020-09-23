const logger = require('winston');
const mongoose = require('mongoose');
const requiredir = require('require-dir');

const CONFIG = require('../config');

module.exports = (ms) => {
    try {
        logger.info('[MONGOOSE] Connection to mongodb');

        const { host, port, db, user, password } = CONFIG.authentication_credentials.mongodb;

        if (!host || !port || !db || !user || !password) {
            throw new Error('Microservice needs mongodb credentials');
        }

        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://' + host + ':' + port + '/' + db, {
            user: user,
            pass: password,
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        logger.info('[MONGOOSE] Load models');

        const path = '../models/';
        const dirs = requiredir(path);

        // Load all models
        Object.keys(dirs).forEach((model) => {
            require(path + model);
        });
    } catch (err) {
        logger.error(err.stack);
        ms.error = true;
    }
};
