'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailWishlistSchema = new Schema({
  id_wishlist:{
    type: Number
  },
  id_produk:{
  	type: Number
  }
});

module.exports = mongoose.model('DetailWishlist', DetailWishlistSchema);