var express = require('express');
var consign = require('consign');

var app = express();

consign().include('app/routes')
.into(app);

module.exports = app;