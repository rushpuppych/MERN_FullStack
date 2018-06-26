
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
        AccountModel.findOne({
            email: req.body.email,
            password: sha256(config.security.hash_salt + '::' + req.body.password)
        } ,(err, account) => {
            if(err != null) {res.status(404);res.send('DB_ERROR');return}
            if(account != null) {

                // Check if user is blocked
                // TODO: this comes later

                // Create and Sign JWT Token
                const cert = fs.readFileSync('./' + config.security.jwt_cert); 
                const payload = {foo: 'bar'};
                const token = jwt.sign(payload, cert, {algorithm: 'RS256', expiresIn: '12h'});
                res.json({'status': 'true' , 'jwt_token': token});
                return;
            } else {
                res.json({'status': 'false' , 'error_code': 'INVALID_CREDENTIALS'});
                return;
            }
        });
    },

    // SignUp Method
    signUp: (req, res) => {
        // todo: Check if Email is existing
    
        req.body.password = sha256(config.security.hash_salt + '::' + req.body.password);
        const account = new AccountModel(req.body);
    
        // todo: Schema Validation

        account.save((err) => {
            if(err != null) {res.status(404);res.send('DB_ERROR');return}
            res.json({'status': 'true'});
        });
    },

    // Email Vertification Method
    vertification: (req, res) => {
        res.json({'status': 'true'});
    },

    // Password Reset Method
    reset: (req, res) => {
        const newPassword = StringHelper.generateRandomPassword(8);
        res.json({'status': 'true'});
    },
};
  
module.exports = publicController;