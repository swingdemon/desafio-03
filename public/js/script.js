// captura de elementos del dom
const splashAdd = document.getElementById('splash-button');
const splashAddForm = document.getElementById('splash-button-form');
let splash = document.getElementById('splash');
let agregarItem = document.getElementById('agregar-item');
let listado = document.getElementById('listado');
let splashDescripcion = document.getElementById('descripcion');
const closeDesc = document.getElementById('close-desc');
const addButton = document.getElementById('add-button');

// botones
splashAdd.addEventListener('click', function () {
	splash.classList.replace('d-flex', 'd-none');
	agregarItem.classList.replace('d-none', 'd-md-block');
	listado.classList.add('d-md-block');
});

addButton.addEventListener('click', function () {
	let nombreItem = document.getElementById('nombreItem');
	let descItem = document.getElementById('descItem');
	let opcionesItem = document.getElementById('opcionesItem');

	if (nombreItem.value == '') {
		alert('tenes que ingresar un nombre pedazo de michi');
	} else {
		agregarItem.classList.add('d-none');
		listado.classList.replace('d-none', 'd-block');
		crearItem(nombreItem.value, descItem.value, opcionesItem.value);
		document.getElementById('form').reset();
	}
});

splashAddForm.addEventListener('click', function () {
	listado.classList.replace('d-block', 'd-none');
	agregarItem.classList.replace('d-none', 'd-block');
});
// funcion para crear un li
function crearItem(nombre, descripcion, opcion) {
	let newItem = `<li itemprop="item" data-name="${nombre}" data-icon="${opcion}" data-desc="${descripcion}">${opcion}   ${nombre} </li> `;

	let lista = document.getElementById('lista');
	lista.innerHTML += newItem;
	//escuchando clicks de los li
	let itemList = document.querySelector('#lista');
	itemList.addEventListener('click', function (e) {
		if (e.target.localName == 'li') {
			//capturando data atributes
			let dataName = e.target.getAttribute('data-name');
			let dataIcon = e.target.getAttribute('data-icon');
			let dataDesc = e.target.getAttribute('data-desc');
			//capturando elementos html
			let h1Name = document.getElementById('titulo-item');
			let spanIcon = document.getElementById('icono-item');
			let pDesc = document.getElementById('descripcion-item');
			//metiendo data atributes en elementos html
			h1Name.innerHTML = dataName;
			spanIcon.innerHTML = dataIcon;
			pDesc.innerHTML = dataDesc;
			//mostrando descripcion y ocultando lista
			listado.classList.replace('d-block', 'd-none');
			listado.classList.replace('d-md-block', 'd-md-none');
			splashDescripcion.classList.replace('d-none', 'd-block');
			splashDescripcion.classList.replace('d-md-none', 'd-md-block');
		}
	});
}

// cierre de descripcion
closeDesc.addEventListener('click', function () {
	listado.classList.replace('d-none', 'd-block');
	listado.classList.replace('d-md-none', 'd-md-block');
	splashDescripcion.classList.replace('d-block', 'd-none');
	splashDescripcion.classList.replace('d-md-none', 'd-md-none');
});
