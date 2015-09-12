- Autenticación
	- GET /auth (va a recibir email  y password)
	- /auth?email=pepe@pepo.com&password=test
	- los querystring llegan en req.query
	- va a buscar en la base si coinciden y va a generar un token, lo va a guardar en la base y lo va a devolver
	- npm install token-generator
	- npm install random-token


	- Al metodo PUT que ya hicimos le vamos a agregar una capa de seguridad
	- recibiendo el token en un header "Authorization"
	- chequeando en la base quien tiene ese token
	- y validando que ese usuario sea el mismo que queremos modificar


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
			...
			res.status(201).end();
		})