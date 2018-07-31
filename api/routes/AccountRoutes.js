
module.exports = (app) => {
    // Controller Import
    const Controller = require('../controllers/account/AccountController.js');

    /**
     * @apiGroup Account
     * @apiName SignIn
     * @api {post} /account/signin User Login
     *
     * @apiParam {String} email E-Mail Address
     * @apiParam {String} password Password as sha256 hash
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when <code>status</code> is false) This holds the Error Code.
     * @apiSuccess {String} jwt_token (Only when <code>status</code> is true) This is the valid JWT Token
     * @apiSuccess {String} payload (Only when <code>status</code> is true) this holds the account Informations.
     */
    app.post('/account/signin', Controller.signIn);

    /**
     * @apiGroup Account
     * @apiName SignUp
     * @api {post} /account/signup Register new User Account
     *
     * @apiParam {String} firstname Firstname
     * @apiParam {String} familyname Familyname
     * @apiParam {String} email E-Mail Address.
     * @apiParam {String} password Password as sha256 hash
     * @apiParam {String} passwordre Password retyped as sha256 hash
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when <code>status</code> is false) this holds the Error Code.
     * @apiSuccess {String} payload (Only when <code>status</code> is false) this holds the Validation Informations.
     */
    app.post('/account/signup', Controller.signUp);

    /**
     * @apiGroup Account
     * @apiName Vertification
     * @api {get} /account/vertify/:id Email Vertification
     *
     * @apiParam {String} :id Vertification Code (Base64(email + sha256(email + secret)))
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when <code>status</code> is false) this holds the Error Code.
     */
    app.get('/account/vertification/:id', Controller.vertification);

    /**
     * @apiGroup Account
     * @apiName Reset Password
     * @api {get} /account/reset/:email Password Reset
     *
     * @apiParam {String} :email Email address of user account
     *
     * @apiSuccess {Boolean} status This is true when success
     * @apiSuccess {String} error_code (Only when <code>status</code> is false) this holds the Error Code.
     */
    app.get('/account/reset/:email', Controller.reset);    
}