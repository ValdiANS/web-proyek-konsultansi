'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdersSchema = new Schema({
  id_user:{
    type: Schema.ObjectId
  },
  id_cart:{
    type: Schema.ObjectId
  },
  jumlah_bayar:{
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Orders', OrdersSchema);