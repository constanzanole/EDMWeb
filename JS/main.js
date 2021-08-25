//Eventos submit
let miFormulario = document.getElementById('edmFormu');
miFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
	e.preventDefault();
	let edmFormu = e.target;

	for (let i = 0; i <= 6; i++) {
		console.log(edmFormu[i].value);
	}
}

//personalizo, dejanos tu consulta
function nombreConsulta() {
	const consulta = document.getElementById('consulta');
	let persona = prompt('Ingrese su nombre');
	consulta.innerText = persona + ' Dejanos tu consulta';
}

nombreConsulta();

//Create element
let tit = document.createElement('h1');
tit.innerText = 'Gracias por visitar EDM';
miFormulario.appendChild(tit);
