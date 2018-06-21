
module.exports = (app) => {
    // Controller Import
    const Controller = require('../controllers/account/AccountController.js');

    /**
     * @apiGroup Account
     * @apiName SignIn
     * @api {post} /account/signin User Login
     *
     * @apiParam {String} email E-Mail Address
     * @apiParam {String} password Password as sha1 hash
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when Status is false) This holds the Error Code.
     * @apiSuccess {String} token (Only when Status is true) This is the valid JWT Token
     */
    app.post('/account/signin', Controller.signin);

    /**
     * @apiGroup Account
     * @apiName SignUp
     * @api {post} /account/signup Register new User Account
     *
     * @apiParam {String} firstname Firstname
     * @apiParam {String} familyname Familyname
     * @apiParam {String} email E-Mail Address.
     * @apiParam {String} password Password as sha1 hash
     * @apiParam {String} passwordre Password retyped as sha1 hash
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when Status is false) this holds the Error Code.
     */
    app.post('/account/signup', Controller.signUp);

    /**
     * @apiGroup Account
     * @apiName Vertification
     * @api {get} /account/vertify/:id Email Vertification
     *
     * @apiParam {String} :id Vertification Code (Base64(email + sha1(email + secret)))
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when Status is false) this holds the Error Code.
     */
    app.get('/account/vertification', Controller.vertification);

    /**
     * @apiGroup Account
     * @apiName Reset Password
     * @api {get} /account/reset/:email Password Reset
     *
     * @apiParam {String} :email Email address of user account
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when Status is false) this holds the Error Code.
     */
    app.get('/account/reset', Controller.reset);    
}