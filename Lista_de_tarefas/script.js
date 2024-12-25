document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  // Função para adicionar uma tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }

    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-task btn btn-sm btn-danger">Excluir</button>
    `;

    // Marcar tarefa como concluída
    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        li.classList.toggle('completed');
      }
    });

    // Excluir tarefa
    li.querySelector('.delete-task').addEventListener('click', () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
  }

  // Evento do botão Adicionar
  addTaskButton.addEventListener('click', addTask);

  // Adicionar tarefa ao pressionar Enter
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
