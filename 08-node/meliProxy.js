var proxy = require('./proxy');
var express = require('express')

var app = express()
 
app.use('/v1/',proxy);
 
app.listen(3000)
