const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const path = require('path');

const app = express();
const mainRoutes = require('./src/routes/routes');
const portfolioDetailsRouter = require('./src/routes/portfolioDetailsRouter');


app.use(express.static(path.join(__dirname, '/public')));


app.set('views', './src/views');
app.set('view engine', 'ejs');


// Routes Import
app.use('/', mainRoutes);
app.use('/portfolio-details', portfolioDetailsRouter);
//routes


// Start Server

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});