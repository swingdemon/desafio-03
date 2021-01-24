// captura de elementos del dom
const splashAdd = document.getElementById('splash-button');
const splashAddForm = document.getElementById('splash-button-form');
let splash = document.getElementById('splash');
let agregarItem = document.getElementById('agregar-item');
let listado = document.getElementById('listado');
let descripcion = document.getElementById('descripcion');
const cancelarButton = document.getElementById('cancelar-button');
const addButton = document.getElementById('add-button');

// botones
splashAdd.addEventListener('click', function () {
	splash.style.display = 'none';
	listado.style.display = 'none';
	agregarItem.style.display = 'flex';
});
cancelarButton.addEventListener('click', function () {
	splash.style.display = 'flex';
	agregarItem.style.display = 'none';
});
splashAddForm.addEventListener('click', function () {
	splash.style.display = 'none';
	listado.style.display = 'none';
	agregarItem.style.display = 'flex';
});
addButton.addEventListener('click', function () {
	listado.style.display = 'flex';
	agregarItem.style.display = 'none';
	let nombreItem = document.getElementById('nombreItem');
	let descItem = document.getElementById('descItem');
	let opcionesItem = document.getElementById('opcionesItem');
	crearItem(nombreItem.value, descItem.value, opcionesItem.value);
});
// funcion para crear un li
function crearItem(nombre, descripcion, opcion) {
	let newItem = `<li>${opcion}  <strong>${nombre}</strong> <p class='off'>${descripcion}
    </p></li>`;
	let lista = document.getElementById('lista');
	lista.innerHTML += newItem;
}
