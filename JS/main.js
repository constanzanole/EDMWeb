

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

// //personalizo, dejanos tu consulta
// function nombreConsulta() {
// 	const consulta = document.getElementById('consulta');
// 	let persona = prompt('Ingrese su nombre');
// 	consulta.innerText = persona + ' Dejanos tu consulta';
// }

// nombreConsulta();

//Create element
let tit = document.createElement('h1');
tit.innerText = 'Gracias por su visita';
miFormulario.appendChild(tit);

// // //Pedir nombre  del usuario por prompt,
// // //guardarlos en el sessionStorage
// let persona = prompt('Ingrese su nombre');
// sessionStorage.setItem('nombre', persona);
// console.log('Los datos guardados: ' + sessionStorage.getItem('nombre'));


	// $("#validationTextarea").hide();

// $("#consulta").mouseenter(Function(){
// 		$("#validationTextarea").slideDown();

// 	});	


//Algo de Jquery para agregar un H1 y modifico su css
$(function () {
	
	$('h1').css({ 'background-color': 'white' });
	$('h1').css({ 'font-size': '24px' });

});

//cuando envío el formulario, cambia la label de tu consulta por gracias por tu consulta

	$('button').click(function () {
		$("#consulta").prepend("Muchas Gracias por  ");
	});






	





