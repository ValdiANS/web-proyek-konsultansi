'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  nama:{
    type: String
  },
  username:{
    type: String
  },
  password:{
    type: String
  },
  email:{
    type: String
  }
});

module.exports = mongoose.model('Admins', AdminSchema);