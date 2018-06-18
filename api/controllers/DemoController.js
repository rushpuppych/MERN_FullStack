

// Include Models
//const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
  res.json({'message': 'create'});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  res.json({'message': 'findAll_demo'});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  res.json({'message': 'findOne'});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  res.json({'message': 'update'});
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  res.json({'message': 'delete'});
};