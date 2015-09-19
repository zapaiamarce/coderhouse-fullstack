var express = require('express');
var app = express();
var mainRouter = require('./endpoints');

var port = process.env.PORT || 3041;

app.use(mainRouter);

app.listen(port,function(){
	console.log('running on',port);
})