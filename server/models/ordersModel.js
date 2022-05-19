'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdersSchema = new Schema({
  id_user:{
    type: Number
  },
  id_cart:{
    type: Number
  },
  jumlah_bayar:{
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Orders', OrdersSchema);