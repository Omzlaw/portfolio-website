
const express  = require('express');

const portfolioDetailsRouter = express.Router();


portfolioDetailsRouter.route('/')
    .get((req, res) => {
        res.render('portfolio-details');
    });

module.exports = portfolioDetailsRouter;