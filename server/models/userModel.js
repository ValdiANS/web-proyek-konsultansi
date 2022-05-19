'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nama:{
    type: String
  },
  username:{
    type: String
  },
  password:{
    type: String
  },
  no_telp:{
    type: String
  },
  email:{
    type: String
  },
  alamat:{
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);