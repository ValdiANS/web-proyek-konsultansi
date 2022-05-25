'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailWishlistSchema = new Schema({
  id_wishlist:{
    type: String
  },
  id_produk:{
  	type: String
  }
});

module.exports = mongoose.model('DetailWishlist', DetailWishlistSchema);