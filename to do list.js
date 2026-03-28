let todos = [];


function renderTodos(){
    const todoUl = document.getElementById('todo-list');
    todoUl.innerHTML = '';

    todos.forEach((item, idx) => {

        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = Document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        //add toggle function
        checkbox.onchange = () => togglecomplete(idx);

        const span = document.createElement('span');
        span.textContent = item.text;
        if(item.completed){
            span.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deletetodo(idx);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoUl.appendChild(li);




    }


)


}

function renderTodos() {
    const todoUl = document.getElementById('todoList');
    todoUl.innerHTML = ''; // Clear previous list
    // Use Array.prototype.forEach to render todos
    todos.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        // Checkbox for completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        // add toggle function
        // checkbox.onchange = () => toggleComplete(idx);

        // Task text
        const span = document.createElement('span');
        span.textContent = item.text;
        if (item.completed) {
            span.classList.add('completed');
        }

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.className = 'btn-edit';
        // editBtn.onclick = () => editTask(idx);

        // Delete button
        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.className = 'btn-delete';
        // add delete function
        // delBtn.onclick = () => deleteTask(idx);

        li.appendChild(checkbox);
        li.appendChild(span);
        // li.appendChild(editBtn);
        li.appendChild(delBtn);
        todoUl.appendChild(li);
    });

    // Array functions: filter & reduce
    // Show pending count
    const pending = todos.filter(t => !t.completed).length;
    document.getElementById('pendingCount').textContent =
        pending === 0
        ? "All tasks completed 🎉"
        : `${pending} pending ${pending === 1 ? "task" : "tasks"}`;

    // Demonstrate Array.prototype.map (can be in console for developer)
    // console.log(todos.map((t, i) => `Task #${i + 1}: ${t.text}`));
}
function addTask() {
    const input = document.getElementById('todoInput');
    let todoText = input.value.trim();
    if (todoText.length === 0) {
        alert('Please enter a task.');
        input.focus();
        return;
    }
    todos.push({ text: todoText, completed: false });
    input.value = '';
    renderTodos();
}