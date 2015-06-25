'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Paginate = require('mongoose-paginate');



var ProductSchema = new Schema({
  title: String,
  blurb: String,
  author: String,
  thumbnail_url: String,
  details_url: String
});

ProductSchema.plugin(Paginate);

module.exports = mongoose.model('Product', ProductSchema);