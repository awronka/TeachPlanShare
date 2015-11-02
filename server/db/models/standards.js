'use strict'

var mongoose = require('mongoose');


var schema = new mongoose.Schema({
	state: String,
	subject: String,
	standardNum : String,
	standard : String
});

mongoose.model('Standards', schema);
