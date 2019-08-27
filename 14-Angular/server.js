var express = require('express');
var router = express();


/* Catch-all route */
router.get('/*', function(req, res) {
  res.render('index', { title: 'Marks and Spencer' });
});

module.exports = router;