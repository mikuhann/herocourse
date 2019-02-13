let tasks = [
  'task 1',
  'task 2',
  'task 3'
];
let taskList = document.querySelector('.list-group');

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