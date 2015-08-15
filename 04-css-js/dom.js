window.addEventListener('load',function(){
	var form = document.querySelector('.registro');
	var inputPassword = document.querySelector('input[type="password"');
	
	// inputPassword.addEventListener('keypress',function(){
	// 	console.log(this.value)
	// })

	form.addEventListener('submit',function(elEvento){
		elEvento.preventDefault();
		console.log('test')

		// this.password.addEventListener('keypress',function(){
		// 	console.log('tecla')
		// })

		if(!this.email.value){
			alert('no hay email')
		}else if(!this.password.value){
			alert('no hay password')
		}else{
			document.querySelector('div').innerHTML = 'todo bien !!'
		}



		

		// muestra info del evento
		// console.log(elEvento);
	})
});