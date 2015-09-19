var m = require('mongoose');

var userSchema = new m.Schema({ 
	email: 'string', 
	password: 'string'
});
var User = m.model('User', userSchema);

module.exports = User;