app.get('auth/facebook/callback',
	passport.authenticate('facebook'),
	function(req,res){
	req.user
	req.query.returnTo
})

app.get('auth/facebook',function(req,res){
	
	var mid = passport.authenticate('facebook',{
		    callbackURL: '/auth/facebook/callback?returnTo=' +req.query.returnTo
		})

	mid(req,res,function(){
		console.log('termino')
	});
})
