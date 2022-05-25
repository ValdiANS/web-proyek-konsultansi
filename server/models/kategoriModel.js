'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KategoriSchema = new Schema({
  nama:{
    type: String
  },
  deskripsi:{
    type: String,
    default: "-"
  }
});

module.exports = mongoose.model('Kategori', KategoriSchema);