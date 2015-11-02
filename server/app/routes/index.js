'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./user.router'));
router.use('/lessons', require('./lesson.router'))


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
