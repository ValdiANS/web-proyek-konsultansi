'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WishlistSchema = new Schema({
  id_user:{
    type: String
  }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);