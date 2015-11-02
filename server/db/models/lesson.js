'use strict'

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	'name': String,
	'learningObjective' : String,
	'timeframe' : String,
	differentiation: [String],
	activities: [String],
	minilesson: String,
	assessments: String,
	resources: [String],
	tags: String,
	subjects: [String],
	Standards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Standard'}],
	videoLinks: [String],
	gameLinks: [String],
	otherResource: [String],
	iframeLinks: [String],
	contributers:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}] 
});


mongoose.model('Lesson', schema);


