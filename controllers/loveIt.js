const express = require('express');
const router = express.Router();

router.get('/animals', (req, res) => {
    res.render('love-it/animals', {animals: ['dogs', 'sloths', 'giraffe', 'kangaroo']})
});

router.get('/foods', (req, res) => {
    res.render('love-it/foods', {foods: ['tacos', 'prime rib', 'sushi', 'PASTA']})
});

module.exports = router;