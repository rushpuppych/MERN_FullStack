
module.exports = (app) => {
    const Controller = require('../controllers/DemoController.js');

    // Create Demo
    app.post('/demo', Controller.create);

    // Get All Back
    app.get('/demo', Controller.findAll);

    /**
     * @api {post} /demo/:id Request Demo Information of specific Demo Object
     * @apiName DemoApi
     * @apiGroup Demo
     *
     * @apiParam {Number} id Users unique ID.
     *
     * @apiSuccess {String} firstname Firstname of the User.
     * @apiSuccess {String} lastname  Lastname of the User.
     */
    app.get('/demo/:demoId', Controller.findOne);

    // Update a Note with noteId
    app.put('/demo/:demoId', Controller.update);

    // Delete a Note with noteId
    app.delete('/demo/:demoId', Controller.delete);
}