console.log("h");
let tasks = [];
let projects = [];
restoreLocalTasks(tasks);
restoreLocalProjects(projects);
import {dropMenu, showProjects, allTasks, todaysTasks, kk, removeTask, removeProject, allProjects} from "./modules/dom";
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

document.addEventListener("click", (event) => {
    removeTask(event, tasks);
})

document.addEventListener("click", (event) => {
    removeProject(event, tasks);
})

function setLocalTasks(tasks) {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
};
function setLocalProjects(projects) {
    localStorage.setItem("Projects", JSON.stringify(projects));
};
function restoreLocalTasks() {
    tasks = JSON.parse(localStorage.getItem("Tasks"));
    if (tasks == null) {
        tasks = [];
    }
    else {
        allTasks(tasks);
        return tasks = JSON.parse(localStorage.getItem("Tasks"));
    };
};
function restoreLocalProjects() {
    projects = JSON.parse(localStorage.getItem("Projects"));
    if (projects == null) {
        projects = [];
    }
    else {
        allProjects(projects);
        return projects = JSON.parse(localStorage.getItem("Projects"));
    }
    
}


export {tasks, setLocalProjects, setLocalTasks};




