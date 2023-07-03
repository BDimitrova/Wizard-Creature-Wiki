const router = require('express').Router();
const creaturesServices = require('../services/creaturesServices');

const { isAuth } = require('../middleware/authMiddleware');

router.get('/all-posts', async (req, res) => {
    let creatures = await creaturesServices.getAll();
    res.render('creatures/all-posts', { creatures });
});

router.get('/create', (req, res) => {
    res.render('creatures/create')
});

router.post('/create', isAuth, async (req, res) => {
    try {
        await creaturesServices.create({ ...req.body, owner: req.user._id });
        res.redirect('/creatures/all-posts');
    } catch (error) {
        console.log(error);
        res.render('creatures/create', { error: getErrorMessage(error) });
    }
});

function getErrorMessage(error) {
    let errorsArr = Object.keys(error.errors);

    if (errorsArr.length > 0) {
        return error.errors[errorsArr[0]];
    } else {
        return error.message
    }

}
module.exports = router;