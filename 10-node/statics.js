var express = require('express');
var app = express();


app.use(express.static('uploads',{
	maxAge:1000*60*60
}));




app.listen(3004);