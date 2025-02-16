document.getElementById('add-task').addEventListener('click', function() {
  const taskName = document.getElementById('task-name').value;
  const taskDetails = document.getElementById('task-details').value;
  const taskPriority = document.getElementById('task-priority').value;
  const taskDeadline = document.getElementById('task-deadline').value;
  const recurringTask = document.getElementById('recurring-task').checked;
  const timeSpent = document.getElementById('time-tracking').value;
  const taskCategory = document.getElementById('task-category').value;

  if (taskName && taskDetails) {
    const taskList = document.getElementById('tasks');
    const li = document.createElement('li');
    li.classList.add(taskPriority);

    if (recurringTask) {
      li.classList.add('recurring');
    }

    const deadlineText = taskDeadline ? `<div class="deadline">Deadline: ${taskDeadline}</div>` : '';
    const timeText = timeSpent ? `<div class="time-tracked">Time Spent: ${timeSpent} hrs</div>` : '';
    const categoryText = `<div class="category">Category: ${taskCategory}</div>`;

    li.innerHTML = `
      <strong>${taskName}</strong>
      <p>${taskDetails}</p>
      ${deadlineText}
      ${timeText}
      ${categoryText}
    `;
    
    taskList.appendChild(li);

    document.getElementById('task-name').value = '';
    document.getElementById('task-details').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('time-tracking').value = '';
    document.getElementById('task-category').value = 'work';
    document.getElementById('recurring-task').checked = false;
  }
});
