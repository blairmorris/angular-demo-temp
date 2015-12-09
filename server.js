var express = require('express');
var app = express();
var open = require('open');
var path = require('path');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/app'));

app.listen(65001);
open("http://localhost:65001");