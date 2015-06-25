'use strict';

var _ = require('lodash');
var Product = require('./product.model');

// Get list of products
exports.index = function(req, res) {
  Product.find(function (err, products) {
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  });
};


exports.index = function(req, res){
  Product.paginate({}, req.params.page, 20, function(error, pageCount, paginatedResults, itemCount){
    if (error){
      handleError(res, error);
    }
    res.send(paginatedResults);
  });
};

// Get a single product
exports.show = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    return res.json(product);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}