// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.id = `task-${index}`;

        const taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;

        if (task.completed) {
            taskItem.classList.add('completed');
            taskDescription.style.textDecoration = 'line-through';
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Unmark' : 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', () => toggleTaskCompletion(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(taskDescription);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
        tasks.push({ description: taskDescription, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to toggle task completion status
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task with animation
function deleteTask(index) {
    const taskItem = document.getElementById(`task-${index}`);

    // Apply fade-out animation before removing the task
    taskItem.style.animation = 'fadeOut 0.5s forwards';

    setTimeout(() => {
        tasks.splice(index, 1);
        renderTasks();
    }, 500); // Wait for the animation to complete
}

// Event listener for adding a task
document.getElementById('add-task-btn').addEventListener('click', addTask);
