const validator = require('../validators/registerValidator');
const controller = require('../controllers/registerController');

module.exports = (router) => {
    router.route('/').post(validator.register, controller.register);
};
