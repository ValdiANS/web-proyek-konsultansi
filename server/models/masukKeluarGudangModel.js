'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MasukKeluarGudangSchema = new Schema({
  id_produk:{
    type: Schema.ObjectId
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