'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
  id_user:{
    type: String
  }
});

module.exports = mongoose.model('Cart', CartSchema);