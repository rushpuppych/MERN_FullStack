
// Include Models and Helpers
const AccountModel = require('../../models/account/AccountModel');
const StringHelper = require('../../helpers/StringHelper');
const fs = require('fs');
const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const config = require('../../../config/api.config');

// Private Controller
const privateController = {
    // this is all Private and will not be exported
};

// Public Controller
const publicController = {
    // SignIn Method
    signIn: (req, res) => {
        // TODO: This must come from Database
        const email = 'info@demo.com';
        const password = sha256('test');
        
        // Check email is invalid
        if(req.body.email != email){
            res.json({'status': 'false' , 'error_code': 'email'});
            return;
        }

        // Check if password is invalid
        if(req.body.password != password) {
            res.json({'status': 'false' , 'error_code': 'password'});
            return;
        }

        // Check if user is blocked
        // TODO: this comes later

        // Create and Sign JWT Token
        const cert = fs.readFileSync('./' + config.security.jwt_cert); 
        const payload = {foo: 'bar'};
        const token = jwt.sign(payload, cert, {algorithm: 'RS256', expiresIn: '12h'});
        res.json({'status': 'true' , 'jwt_token': token});
        return;
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