
// Include Models and Helpers
const AccountModel = require('../../models/account/AccountModel');
const StringHelper = require('../../helpers/StringHelper');
const MailBuilderHelper = require('../../helpers/MailBuilderHelper');
const fs = require('fs');
const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const config = require('../../../api/api.config');

// Private Controller
const privateController = {
    sendVertificationMail: (email, accountcode) => {
        MailBuilderHelper.setMailTemplate('defaultTemplate');
        MailBuilderHelper.addPlaceholder('mail_subject', 'Please klick the vertification lînk.');
        MailBuilderHelper.addPlaceholder('preheader', 'Welcome to MERN');
        MailBuilderHelper.addPlaceholder('content_title', 'Account vertification');
        MailBuilderHelper.addPlaceholder('content_first', 'Welcome to MERN the OpenSource free available MERN Stack.');
        MailBuilderHelper.addPlaceholder('html:content_second', "You need to vertificate your Account by pressing the link below.\n" + '<a href="' + config.paths.api + "account/vertification/" + accountcode + '">Vertification link</a>');
        MailBuilderHelper.addPlaceholder('text:content_second', "You need to vertificate your Account by pressing the link below.\n" + config.paths.api + "account/vertification/" + accountcode);
        MailBuilderHelper.addPlaceholder('content_end', 'Thanks, your MERN Team');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('company_address', 'MERN Company, Secretplace, AA-9999 Villagetown')
        MailBuilderHelper.addPlaceholder('powered_link', 'https://github.com/rushpuppych/MERN_FullStack');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('unsubscribe_link', 'https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif');
        MailBuilderHelper.sendMail(email, 'Welcome to MERN, Account vertification.');
    },

    sendNewPasswordMail: (email, password) => {
        MailBuilderHelper.setMailTemplate('defaultTemplate');
        MailBuilderHelper.addPlaceholder('mail_subject', 'Your Password restored !');
        MailBuilderHelper.addPlaceholder('preheader', 'Your MERN Password is now restored.');
        MailBuilderHelper.addPlaceholder('content_title', 'Your new MERN Password');
        MailBuilderHelper.addPlaceholder('content_first', 'Please change the Password after your first login.');
        MailBuilderHelper.addPlaceholder('html:content_second', "Use the folowing password for signup:<br><b>" + password + "</b>");
        MailBuilderHelper.addPlaceholder('text:content_second', "Use the folowing password for signup:\n" + password);
        MailBuilderHelper.addPlaceholder('content_end', 'Thanks, your MERN Team');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('company_address', 'MERN Company, Secretplace, AA-9999 Villagetown')
        MailBuilderHelper.addPlaceholder('powered_link', 'https://github.com/rushpuppych/MERN_FullStack');
        MailBuilderHelper.addPlaceholder('unsubscribe_link', 'https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif');
        MailBuilderHelper.sendMail(email, 'Welcome to MERN, Account vertification.');
    }
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
                if(!account.vertificated) {
                    privateController.sendVertificationMail(account.email, account.id);
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

                    privateController.sendVertificationMail(account.email, account.id);
                    res.json({'status': 'true'});
                });
            }
        })
    },

    // Email Vertification Method
    vertification: (req, res) => {
        const update = {
            vertificated: true,
            updatedAt: Date.now(),
        };
        AccountModel.update({_id: req.params.id}, update, function(err, raw) {
            if (err) {
                res.json({'status': 'false', 'error_code': 'VERTIFICATION_ERROR', 'payload': {}});
            } else {
                res.redirect(config.paths.web + 'signin');
            };
        });
    },

    // Password Reset Method
    reset: (req, res) => {
        AccountModel.findOne({
            email: req.params.email
        } ,(err, account) => {
            if(err != null) {res.status(404);res.send('DB_ERROR');return}
            if(account != null) {
                const newPassword = StringHelper.generateRandomPassword(8);
                const update = {
                    password: sha256(config.security.hash_salt + '::' + sha256(newPassword)),
                    updatedAt: Date.now(),
                };                
                AccountModel.update({email: req.params.email}, update, function(err, raw) {
                    if (err) {
                        res.json({'status': 'false', 'error_code': 'RESET_ERROR', 'payload': {}});
                        return;
                    } else {
                        privateController.sendNewPasswordMail(req.params.email, newPassword);
                        res.json({'status': 'true'});
                        return;
                    };
                });
            } else {
                res.json({'status': 'false' , 'error_code': 'INVALID_EMAIL'});
                return;                
            }
        });
    }
};
  
module.exports = publicController;