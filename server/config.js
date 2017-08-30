const consign = require('consign');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));

consign()
    .include('./app/routes')
    .then('server/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;