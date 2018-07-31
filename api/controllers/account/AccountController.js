
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
    sendVertificationMail: (emailAddress, accountcode) => {
        MailBuilderHelper.setMailTemplate('defaultTemplate');
        MailBuilderHelper.addPlaceholder('mail_subject', 'Please klick the vertification lînk.');
        MailBuilderHelper.addPlaceholder('preheader', 'Welcome to MERN');
        MailBuilderHelper.addPlaceholder('content_title', 'Account vertification');
        MailBuilderHelper.addPlaceholder('content_first', 'Welcome to MERN the OpenSource free available MERN Stack.');
        MailBuilderHelper.addPlaceholder('html:content_second', "You need to vertificate your Account by pressing the link below.\n" + '<a href="' + config.paths.web + "account/vertification/" + accountcode + '">Vertification link</a>');
        MailBuilderHelper.addPlaceholder('text:content_second', "You need to vertificate your Account by pressing the link below.\n" + config.paths.web + "account/vertification/" + accountcode);
        MailBuilderHelper.addPlaceholder('content_end', 'Thanks, your MERN Team');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('company_address', 'MERN Company, Secretplace, AA-9999 Villagetown')
        MailBuilderHelper.addPlaceholder('powered_link', 'https://github.com/rushpuppych/MERN_FullStack');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('unsubscribe_link', 'https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif');
        
        const status = MailBuilderHelper.sendMail(emailAddress, 'Welcome to MERN, Account vertification.');
        return status;
    },

    sendNewPasswordMail: (email, password) => {
        MailBuilderHelper.setMailTemplate('defaultTemplate');
        MailBuilderHelper.addPlaceholder('mail_subject', 'Your Password restored !');
        MailBuilderHelper.addPlaceholder('preheader', 'Your MERN Password is now restored.');
        MailBuilderHelper.addPlaceholder('content_title', 'Your new MERN Password');
        MailBuilderHelper.addPlaceholder('content_first', 'Please change the Password after your first login.');
        MailBuilderHelper.addPlaceholder('content_second', "Use the folowing password for signup:\n" + password);
        MailBuilderHelper.addPlaceholder('content_end', 'Thanks, your MERN Team');
        MailBuilderHelper.addPlaceholder('powered_text', 'MERN_FullStack');
        MailBuilderHelper.addPlaceholder('company_address', 'MERN Company, Secretplace, AA-9999 Villagetown')
        MailBuilderHelper.addPlaceholder('powered_link', 'https://github.com/rushpuppych/MERN_FullStack');
        MailBuilderHelper.addPlaceholder('unsubscribe_link', 'https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif');
        
        const status = MailBuilderHelper.sendMail(emailAddress, 'Welcome to MERN, Account vertification.');
        return status;
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

                    const status = privateController.sendVertificationMail(account.email, account.id);
                    res.json({'status': status});
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
        const status = privateController.sendNewPasswordMail(res.body.email, newPassword);
        // TODO: SAVE NEW PASSWORD TO DB
        res.json({'status': status});
    }
};
  
module.exports = publicController;