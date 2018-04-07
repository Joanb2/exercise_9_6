var list = document.getElementById('list');
var add = document.getElementById('addElem');
var element = document.createElement('click','li')[0];
var length = list.getElementsByTagName('li');

addElem.addEventListner('click', create(addElem));

function create() {
	element;
	element.innerHTML = 'item';
	list.appendChild(element);
}