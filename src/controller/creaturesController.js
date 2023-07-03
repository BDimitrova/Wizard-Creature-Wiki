const router = require('express').Router();

router.get('/all-posts', (req, res) => {
    res.render('creatures/all-posts');
});

module.exports = router;