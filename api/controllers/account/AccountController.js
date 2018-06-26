
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
        console.log(req.body.email, sha256(config.security.hash_salt + '::' + req.body.password));
        AccountModel.findOne({
            email: req.body.email,
            password: sha256(config.security.hash_salt + '::' + req.body.password)
        } ,(err, account) => {
            if(err != null) {res.status(404);res.send('DB_ERROR');return}
            if(account != null) {
                // Check if user is blocked
                if(!account.vertificated) {
                    res.json({'status': 'false' , 'error_code': 'ACCOUNT_NOT_VALIDATED'});
                    return;                    
                }

                // Create and Sign JWT Token
                account.password = '-SECURE-';
                const cert = fs.readFileSync('./' + config.security.jwt_cert); 
                const payload = {foo: 'bar'};
                const token = jwt.sign(payload, cert, {algorithm: 'RS256', expiresIn: '12h'});
                res.json({'status': 'true' , 'jwt_token': token, 'payload': account});
                return;
            } else {
                res.json({'status': 'false' , 'error_code': 'INVALID_CREDENTIALS'});
                return;
            }
        });
    },

    // SignUp Method
    signUp: (req, res) => {
        AccountModel.findOne({
            email: req.body.email
        } ,(err, account) => {
            if(err != null) {res.status(404);res.send('DB_ERROR');return}
            if(account != null) {
                res.json({'status': 'false', 'error_code': 'VALIDATION_ERROR', 'payload': {
                    email: {message: 'EMAIL_IS_EXISTING'}
                }});
                return;
            } else {
                if(req.body.password !== req.body.passwordre) {
                    res.json({'status': 'false', 'error_code': 'VALIDATION_ERROR', 'payload': {
                        password: {message: 'PASSWORD_NOT_IDENTICAL'}
                    }});
                    return;
                }                
                req.body.vertificated = false;
                req.body.password = sha256(config.security.hash_salt + '::' + req.body.password);
                const account = new AccountModel(req.body);
                account.save((err) => {
                    if(err != null) {
                        res.json({'status': 'false', 'error_code': 'VALIDATION_ERROR', 'payload': err.errors});
                        return;
                    }
                    res.json({'status': 'true'});
                });
            }
        })
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