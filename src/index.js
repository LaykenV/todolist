console.log("h");
const tasks = [];
const projects = [];
import {dropMenu, showProjects, allTasks, todaysTasks, kk} from "./modules/dom";
import {task, project} from "./modules/factories";
import {addTask, addProject} from "./modules/todo";
dropMenu();
addTask(tasks);
addProject(projects);

const showAllTasks = document.querySelector("#alldates");
showAllTasks.addEventListener("click", function() {
    allTasks(tasks);
})

const showTodaysTasks = document.querySelector("#todaydate");
showTodaysTasks.addEventListener("click", function() {
    todaysTasks(tasks);
})

export {tasks};




