const { response201WithData } = require('../../../common/helpers/expressResHelper');

const register = (req, res) => {
    response201WithData(res, { toto: req.body });
};

module.exports = { register };
