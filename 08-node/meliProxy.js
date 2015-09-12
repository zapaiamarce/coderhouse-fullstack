var proxy = require('./proxy');
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

// Soluciona el problema de cross domain o cros origin
// 'Access-Control-Allow-Origin'
app.use(cors());

app.use(function(req,res,next){
	console.log(req.body);
	next();
})

app.post('/users/',function(req,res){
	res.json(req.body)
})

app.use('/v1/',proxy);
 
app.listen(3000)
