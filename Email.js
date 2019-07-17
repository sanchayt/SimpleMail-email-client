const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defined collection and schema for Email
let Email = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
  ,
  email: {
    type: String
  },
  message: {
    type: String
  }, 
  date: {
      type: Date
  },
  subject: {
      type: String
  }
},{
    collection: 'emails'
});

module.exports = mongoose.model('Email', Email);