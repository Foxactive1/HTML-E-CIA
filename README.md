# HTML-E-CIA
# Lista de Tarefas

Este projeto é uma aplicação web simples de **Lista de Tarefas**, construída utilizando **HTML**, **CSS** (com **Bootstrap**) e **JavaScript**. A aplicação permite adicionar tarefas, marcá-las como concluídas e removê-las de forma dinâmica.

## Funcionalidades

- **Adicionar Tarefa**: Insira um texto no campo e clique no botão "Adicionar" ou pressione **Enter** para criar uma nova tarefa.
- **Marcar como Concluída**: Clique no texto de uma tarefa para riscar e marcá-la como concluída.
- **Excluir Tarefa**: Remova uma tarefa clicando no botão "Excluir" ao lado dela.

## Estrutura do Projeto

### Arquivos Principais

- **index.html**: Estrutura básica da aplicação.
- **styles.css**: Estilização personalizada para o layout.
- **script.js**: Lógica de funcionamento (interatividade).

### Tecnologias Utilizadas

- **HTML**: Para a estrutura do conteúdo.
- **CSS**: Para estilização personalizada e responsividade (com suporte do **Bootstrap**).
- **Bootstrap**: Framework CSS para componentes estilizados e responsivos.
- **JavaScript**: Para adicionar interatividade ao projeto.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd lista-de-tarefas
   ```

3. Abra o arquivo `index.html` no navegador:
   - No Windows: Clique duas vezes no arquivo.
   - No Linux/Mac: Use um navegador para abrir o arquivo.

## Estrutura de Código

### index.html

Este arquivo contém a estrutura da aplicação, incluindo o uso do **Bootstrap** para componentes como o botão e a lista de tarefas:
```html
<div class="container mt-5">
  <h1 class="text-center mb-4">Lista de Tarefas</h1>
  <div class="input-group mb-3">
    <input type="text" id="task-input" class="form-control" placeholder="Digite uma tarefa...">
    <div class="input-group-append">
      <button id="add-task" class="btn btn-success">Adicionar</button>
    </div>
  </div>
  <ul id="task-list" class="list-group"></ul>
</div>
```

### styles.css

Este arquivo personaliza a aparência da aplicação, incluindo estilos para tarefas concluídas e botões:
```css
li.completed span {
  text-decoration: line-through;
  color: gray;
}

button.delete-task {
  background-color: #dc3545;
}
```

### script.js

Este arquivo contém a lógica da aplicação, incluindo a funcionalidade de adicionar, marcar e excluir tarefas:
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Por favor, digite uma tarefa!');
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.innerHTML = `<span>${taskText}</span><button class="delete-task btn btn-danger">Excluir</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }

  addTaskButton.addEventListener('click', addTask);
});
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está sob a licença MIT.

---
**Criado por Dione Castro Alves**  
*InNovaIdeia Assessoria em Tecnologia ®*


