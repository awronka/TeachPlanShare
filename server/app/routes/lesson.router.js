var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Lesson = mongoose.model('Lesson');

// Evaluate Id
router.param('id', function (req, res, next, id) {
	//Find and populate requested lesson
	Lesson.findById(id).populate('contributors').exec()
	.then(function (lesson) {
		if (!lesson) throw HttpError(404);
		else {
			req.lesson = lesson;
			next();
		}
	})
});

module.exports = router;