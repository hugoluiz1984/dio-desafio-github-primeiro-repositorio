let formulario = document.getElementById('task-form');
let listaDeTarefas = document.getElementById('tasks');

formulario.onsubmit = function (e) {
	e.preventDefault();
	let inputField = document.getElementById('task-input');
	addTask(inputField.value);
	formulario.reset();
};

function addTask(descricao) {
	let tarefaContainer = document.createElement('div');
	let novaTarefa = document.createElement('input');
	let tarefaLabel = document.createElement('label');
	let valor = document.createTextNode(descricao);
	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', descricao);
	novaTarefa.setAttribute('id', descricao);
	tarefaLabel.setAttribute('for', descricao);
	tarefaLabel.appendChild(valor);
	tarefaContainer.classList.add('task-item');
	tarefaContainer.appendChild(novaTarefa);
	tarefaContainer.appendChild(tarefaLabel);
	listaDeTarefas.appendChild(tarefaContainer);
}
