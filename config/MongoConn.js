var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sicecui');
var db = mongoose.connection;

module.exports = db;
