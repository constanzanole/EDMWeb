//DOM
let nosotros = document.getElementsByClassName('row featurette caja');
console.log(nosotros[0].innerHTML);
console.log(nosotros[1].innerHTML);

//cambio color a Titulos H2
let titulosA = document.getElementById('tituloEquipo');
console.log(titulosA.innerText);
titulosA.style.color = 'pink';

let titulosB = document.getElementById('tituloPro');
console.log(titulosB.innerText);
titulosB.style.color = 'pink';

//Agrego fondo negro a los h2 y recorro el contenido
function activarTitulos() {
	let titulos = document.getElementsByTagName('h2');
	titulos[0].style.background = 'black';
	titulos[1].style.background = 'black';
    for (const titulo of titulos) {
        console.log (titulo.innerText);
    }
}
activarTitulos();

//Evento Clipboard
let textoCopia = document.getElementsByClassName('lead cajaA__p');
textoCopia[(0, 1)].addEventListener('copy', imprimirAlerta);

function imprimirAlerta() {
	alert(
		'Esta pagina tiene todos los derechos reservados, no se pueden reproducir sus textos'
	);
}
