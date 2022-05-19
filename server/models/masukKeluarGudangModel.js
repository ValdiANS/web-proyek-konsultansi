'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MasukKeluarGudangSchema = new Schema({
  id_produk:{
    type: Number
  },
  jumlah_produk:{
    type: Number
  },
  aksi:{
    type: String
  },
  tanggal:{
    type: Date
  }
});

module.exports = mongoose.model('MasukKeluarGudang', MasukKeluarGudangSchema);