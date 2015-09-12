var proxy = require('./proxy');
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.use(function(req,res,next){
	console.log(req.body);
	next();
})

app.post('/users',function(req,res){
	res.json({data:'ok'})
})

app.use('/v1/',proxy);
 
app.listen(3000)
