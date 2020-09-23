const { celebrate, Joi } = require('celebrate');

const { USERNAME_PATTERN, PASSWORD_PATTERN } = require('../../../common/consts/userConst');

const register = celebrate({
    body: Joi.object().keys({
        username: Joi.string().regex(USERNAME_PATTERN).required(),
        password: Joi.string().regex(PASSWORD_PATTERN).required(),
    }),
});

const verifyUsername = celebrate({
    params: Joi.object().keys({
        username: Joi.string().regex(USERNAME_PATTERN).required(),
    }),
});

module.exports = { register, verifyUsername };
