# Endpoints
	- users 
		- POST - GET - PUT - DELETE
		- /users/me : url especial que me busca en la base
		- DELETE: va a cambiar el "active" a false del usuarios y todas sus publicaciones

	- apartments
		- POST - (agrega automaticamente el owner)
		- PUT (Valida el owner)
		- DELETE: cambia "active" a false

	- reservations
		- POST
		- PUT
		- DELETE
		- GET

# Schemas basicos (Pueden agregar)
users {
	email:String,
	password:String,
	fullname:String,
	active:Bollean,
	reservations:[IDs],
	apartments:[IDs]
}

apartments {
	owner:ID,
	title:String,
	description:String,
	address:{
		fullAdress:String,
		cord:geoJSON // http://geojson.org/
	},
	pictures:[{
		url:"url/url"
	}],
	reservations:[IDs]
}

reservations {
	userId:ID,
	apartmentId:ID,
	startDate:Date,
	endDate:Date
}



# Tips