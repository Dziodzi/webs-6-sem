const todoList = document.querySelector('.constructor__todo');
const todoInput = document.querySelector('.constructor__form');
let todos = [];

function addTodo(todo) {
    todos.push(todo);
    storeTodos(todos);
}

function storeTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos(todos);
}

function getTodosFromStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        displayTodos(todos);
    }
}

function clearTodos() {
    localStorage.removeItem('todos');
    todos = [];
    displayTodos(todos);
}

function displayTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const template = document.querySelector('#template');
        const item = template.content.cloneNode(true);
        const itemEl = item.querySelector('.todo-list__item');
        const checkboxEl = item.querySelector('input');
        itemEl.setAttribute('id', todo.id);
        checkboxEl.checked = todo.done;
        itemEl.querySelector('span').textContent = todo.idea;
        todoList.append(item);
    });
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    storeTodos(todos);
}

function toggleTodo(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.done = !todo.done;
        storeTodos(todos);
    }
}

todoInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(todoInput);
    const idea = formData.get('idea').trim();
    if (idea.required || (idea.length < 3)) {
        alert('Напиши бизнес-план, бизнес-брат!');
    } else {
        addTodo({
            idea,
            done: false,
            id: Date.now() + Math.random().toString(36).substr(2, 9),
        });
        todoInput.reset();
    }
});

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete__button')) {
        deleteTodo(event.target.parentElement.id);
    } else if (event.target.classList.contains('checkbox')) {
        toggleTodo(event.target.parentElement.id);
    }
});

getTodosFromStorage();