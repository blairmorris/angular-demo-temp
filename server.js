var express = require('express');
var app = express();
var open = require('open');
var path = require('path');

app.set('port', (process.env.PORT || 65001));
app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(app.get('port'), function() {
	console.log('App is running on port ', app.get('port'));
});
open("http://localhost:" + app.get('port'));