
// Include Models and Helpers
const AccountModel = require('../../models/account/AccountModel');
const StringHelper = require('../../helpers/StringHelper');

// Private Controller
const privateController = {
    // this is all Private and will not be exported
};

// Public Controller
const publicController = {
    // SignIn Method
    signIn: (req, res) => {
        res.json({'token': '__JWT_TOKEN__'});
    },

    // SignUp Method
    signUp: (req, res) => {
        res.json({'status': '200'});
    },

    // Email Vertification Method
    vertification: (req, res) => {
        res.json({'status': '200'});
    },

    // Password Reset Method
    reset: (req, res) => {
        const newPassword = StringHelper.generateRandomPassword(8);
        res.json({'status': '200'});
    },
};
  
module.exports = publicController;