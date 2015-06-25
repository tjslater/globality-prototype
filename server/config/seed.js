/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var Faker = require('Faker');


function getUrl(){

}

Product.find({}).remove(function(){
  for (var i = 0; i < 60; i++){
    var title = Faker.company.bs();

    Product.create({
      title: title,
      blurb: Faker.lorem.paragraphs(),
      author: Faker.name.findName(),
      thumbnail_url: Faker.image.image(),
      details_url: "/product/" + Faker.helpers.slugify(title)
    })
  }
});