
const mongoose = require('mongoose');

const account = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'FIRSTNAME_REQUIRED']
    },
    familyname: {
        type: String,
        required: [true, 'FAMILYNAME_REQUIRED']
    },
    email: {
        type: String,
        required: [true, 'EMAIL_REQUIRED']
    },    
    password: {
        type: String
    },
    vertificated: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('account', account);