'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailWishlistSchema = new Schema({
  id_wishlist:{
    type: Schema.ObjectId
  },
  id_produk:{
  	type: Schema.ObjectId
  }
});

module.exports = mongoose.model('DetailWishlist', DetailWishlistSchema);