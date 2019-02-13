let tasks = [
  'task 1',
  'task 2',
  'task 3'
];
let taskList = document.querySelector('.list-group');
let showMessageDiv = document.querySelector('.todo-hide');

function generateTaskList(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    taskList.appendChild(generateTaskListItem(tasks[i]));
  }
}
function generateTaskListItem(task) {
  let taskListItem = document.createElement('li');
  taskListItem.className = 'list-group-item';
  taskListItem.textContent = task;
  return taskListItem;
}
generateTaskList(tasks);
function addTask(task) {
  taskList.appendChild(generateTaskListItem(task));
}
function showMessage(msg) {
  showMessageDiv.classList.add('alert', 'alert-info', 'todo-show');
  showMessageDiv.innerText = msg;
  setTimeout(() => showMessageDiv.classList.remove('alert', 'alert-info', 'todo-show'), 3000);
}