var express = require('express');
var app = express();
var https = require('https');
// app.use(function(req,res,next){
// 	console.log(req.url)
// 	console.log('soy un middleware')
// 	next()
// })

// app.use(function(req,res,next){
// 	console.log(req.url)
// 	console.log('<h1> soy un middleware </h1>')
// 	next()
// })

app.get('/pepe', function (req, res) {
  // res.send('<h1> soy '+ req.url+ ' </h1>')
  res.json({
  	nombre:'pedro',
  	apellido:'perez'
  })
});

app.get('/meliProxy', function (req, res) {
  
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q=ipod&limit=3';
	https.get(url, function(resMeli) {
	  // console.log(res);
	  resMeli.on('end', function(d) {
	  	// console.log(d.toString())
	    res.end(d.toString())
	  });
	})
});



app.listen(3000, function () {
	console.log('server corriendo');
});