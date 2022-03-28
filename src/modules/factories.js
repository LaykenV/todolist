let taskID = 0;
function task(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = taskID;
    taskID++
}

function project(title, projectTasks = []) {
    this.title = title;
    this.projectTasks = projectTasks;
}

export {task, project};