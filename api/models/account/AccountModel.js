
const mongoose = require('mongoose');

const account = mongoose.Schema({
    firstname: String,
    familyname: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('account', account);