const logger = require('winston');
const express = require('express');
const read = require('fs-readdir-recursive');
const path = require('path');

module.exports = (ms) => {
    try {
        logger.info('[EXPRESS ROUTES] Initializing routes');

        const { app, serviceName } = ms;

        const directory = '../../microservices/' + serviceName + '/routes/';

        const routes = read(path.join(__dirname, directory));

        // Initialize all routes
        routes.forEach((routeName) => {
            routeName = routeName.replace('\\', '/');
            const arr = routeName.match(/^(.+\/)?([a-zA-z0-9]+)\.js$/);

            const router = express.Router();

            require(directory + arr[0])(router);

            if (arr[2] === 'index') {
                app.use('/' + (arr[1] || ''), router);
            } else {
                app.use('/' + (arr[1] || '') + arr[2], router);
            }
        });
    } catch (err) {
        logger.error(err.stack);
        ms.error = true;
    }
};
