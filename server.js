var express = require('express');
var path = require('path');
var app = express();

var PORT = 3000;

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/app.js',function(req,res){
	res.sendFile(path.join(__dirname + '/app.js'));
});

app.listen(PORT, function(req,res){
	console.log('Listening on PORT: ' + PORT);
});

