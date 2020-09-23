const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    status: {
        type: String,
        enum: ['Active', 'Blocked'],
        default: 'Active',
        index: true,
    },
    phone_number: {
        type: String,
    },
    email: {
        type: String,
    },
    last_authentication_date: {
        type: Date,
    },
    last_legal_acceptance_date: {
        type: Date,
        default: Date.now,
    },
    payment_account: {
        stripe_customer: {
            type: String,
        },
    },
    creation_date: {
        type: Date,
        default: Date.now,
    },
    creation_ip: {
        type: String,
    },
});

module.exports = mongoose.model('User', UserSchema);
