
module.exports = (app) => {
    const controller = require('../controllers/DemoController.js');

    // Create Demo
    app.post('/demo', controller.create);

    // Get All Back
    app.get('/demo', controller.findAll);

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
    app.get('/demo/:demoId', controller.findOne);

    // Update a Note with noteId
    app.put('/demo/:demoId', controller.update);

    // Delete a Note with noteId
    app.delete('/demo/:demoId', controller.delete);
}