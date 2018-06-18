
module.exports = (app) => {
    const controller = require('../controllers/DemoController.js');

    // Create a new Note
    app.post('/demo', controller.create);

    // Retrieve all Notes
    app.get('/demo', controller.findAll);

    // Retrieve a single Note with noteId
    app.get('/demo/:demoId', controller.findOne);

    // Update a Note with noteId
    app.put('/demo/:demoId', controller.update);

    // Delete a Note with noteId
    app.delete('/demo/:demoId', controller.delete);
}