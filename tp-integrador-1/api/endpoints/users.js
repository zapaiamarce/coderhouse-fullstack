var express = require('express');
var router = express.Router();

router.get('/:id',function(req,res){
	res.json({nombre:'el usuario'})
});

router.get('/',function(req,res){
	res.json({nombre:'el usuario'})
});

module.exports = router;