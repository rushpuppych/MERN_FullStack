
const mongoose = require('mongoose');

const account = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('account', account);