- Practica clase
	- Crear un api de usuarios con express y mongo
	- Schema {
		name:String,
		lastName:String,
		age:Number,
		email:String,
		password:String,
		... todo lo que quieran
	  }
	- POST, GET, PUT, DELETE (host:puerto/users)
	
	Ejemplo
		app.put('/users/:userId',function(req,res){
			// uso el req.params.userId para 
			// buscar en la base 
			// y lo actualizo con req.body
			res.json({data:'ok'})
		})
		app.post('/users/',function(req,res){
			res.status(201).end();
		})