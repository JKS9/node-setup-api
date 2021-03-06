const microservice = require('../../common/initializers/microservice');
const mongoose = require('../../common/initializers/mongoose');
const express = require('../../common/initializers/express');
const expressStatus = require('../../common/initializers/express-status');
const expressRoutes = require('../../common/initializers/express-routes');
const expressErrors = require('../../common/initializers/express-errors');
const http = require('../../common/initializers/http');

const initializers = [mongoose, express, expressStatus, expressRoutes, expressErrors, http];

microservice.init('api', initializers);
