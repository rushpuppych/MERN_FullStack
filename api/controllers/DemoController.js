

// Include Models
//const Note = require('../models/note.model.js');

module.exports = {
  create: (req, res) => {
    res.json({'message': 'create'});
  },

  findAll: (req, res) => {
    res.json({'message': 'findAll_demo'});
  },

  findOne: (req, res) => {
    res.json({'message': 'findOne'});
  },

  update: (req, res) => {
    res.json({'message': 'update'});
  },

  delete: (req, res) => {
    res.json({'message': 'delete'});
  }
};