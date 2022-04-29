const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nombreError = document.getElementById('nombreError');

const estatusInf = {
	nombre: false
}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}






inputs.forEach((inp) => {
	inp.addEventListener('keyup', (e) => {
		switch(e.target.name){
			case "nombre":
				if(expresiones.nombre.test(e.target.value)){
					estatusInf.nombre = true;
					nombreError.textContent = '';
					//console.log('Nombre correcto');
				}else {
					console.log('Incorrecto');
					nombreError.textContent = 'Error';
				}
			break;
		}
	})
});


form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log(form);

	//Object.values(estatusInf).includes(false);//busca por lo menos un falso en el objeto

	/* Object.values(estatusInf).every(value => {
			value === true;
	}

	otra opción para checar todos los valores del objeto
	} */

	//evaluar checkbox
	const check = document.querySelector('#terminos').checked;

	if(!Object.values(estatusInf).includes(false) && check){
		console.log('Enviado');
		document.querySelector('.alert-danger').style.display = 'none';
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos);
	}else {
		console.log('No enviado');
		document.querySelector('.alert-danger').style.display = 'block';
	}
});
