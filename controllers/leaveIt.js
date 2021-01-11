const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('leave-it/movies', {movies: ['any musical', 'anything on hallmark', 'why cant every movie be as funny as my cousin vinny tbh]})
});

router.get('/products', (req, res) => {
    res.render('leave-it/products', {products: ['fedoras', 'hipster beers', 'my juul fml']})
});

module.exports = router;