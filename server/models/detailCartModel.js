'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailCartSchema = new Schema({
  id_cart:{
    type: Number
  },
  id_produk:{
    type: Number
  },
  jumlah_produk:{
    type: Number,
    default: 0 
  },
  catatan:{
    type: String
  }
});

module.exports = mongoose.model('DetailCart', DetailCartSchema);