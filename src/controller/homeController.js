const router = require('express').Router();
const creaturesServices = require('../services/creaturesServices');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/profile', async (req, res) => {
    let creatures = await creaturesServices.getMyCreatedPost(req.user._id);
    console.log(creatures);
    res.render('my-posts', {creatures})
})

module.exports = router;