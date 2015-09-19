var m = require('mongoose');

var schema = new m.Schema({ 
	titulo: 'string', 
	direccion: 'string', 
	owner: m.Schema.Types.ObjectId
});

module.exports = m.model('Apartments', schema);
