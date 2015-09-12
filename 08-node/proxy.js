var request = require('request');
var express = require('express');
var router = express.Router();

router.get('/meliProxy/:search',function (req, res) {
	var q = req.params.search;
	var url = "https://api.mercadolibre.com/sites/MLA/search?q="+q;
	console.log(url);
	request({
		method:'GET',
		url:url,
		json:true
	},function(err,response,body){
		res.json(body)
	})
});


module.exports = router;


// Esto no funciona, solo elimina la referencia de la variable exports
// exports = function(){}

