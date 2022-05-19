'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdukSchema = new Schema({
  nama:{
    type: String
  },
  harga:{
    type: Number
  },
  stok:{
    type: Number
  },
  link_gambar:{
    type: String
  }
});

module.exports = mongoose.model('Produk', ProdukSchema);