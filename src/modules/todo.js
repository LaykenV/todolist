import { showProjects, showTasks } from "./dom";
import { project, task } from "./factories";

const addTask = function() {
    let tasks = [];
    const Addbtn = document.querySelector("#addtask");
    const newName = document.querySelector("#taskname");
    const newDesc = document.querySelector("#description");
    const dueDate = document.querySelector("#duedate");
    const newSubmit = document.querySelector("#submit");
    const popup = document.querySelector(".taskpopup");
    popup.classList.add("gone");
    Addbtn.addEventListener("click", function() {
        popup.classList.remove("gone");
    })
    newSubmit.addEventListener("click", function() {
    let   nameInput = newName.value;
    let    descInput = newDesc.value;
    let   dateInput = dueDate.value;
    const newPriority = document.querySelector('input[name="priority"]:checked');
    let   priorityInput = newPriority.value;
    console.log(priorityInput);
    const makeTask = new task(nameInput, descInput, dateInput, priorityInput);
    console.log(makeTask);
    popup.classList.add("gone");
    tasks.push(makeTask);
    console.log(tasks);
    showTasks(tasks, makeTask);
    })
    return tasks;
}

const addProject = function() {
    let projects = [];
    const addProjectBtn = document.querySelector("#addproject");
    const projectName = document.querySelector("#projectname");
    const addProjectPopup = document.querySelector("#addprojectform");
    const createBtn = document.querySelector("#projectsubmit");
    const cancelBtn = document.querySelector("#projectcancel");
    addProjectPopup.classList.add("gone");
    addProjectBtn.addEventListener("click", function() {
        addProjectPopup.classList.remove("gone");
        addProjectBtn.classList.add("gone");
    })
    cancelBtn.addEventListener("click", function() {
        addProjectPopup.classList.add("gone");
        addProjectBtn.classList.remove("gone");
    })
    createBtn.addEventListener("click", function() {
        let projectNameInput = projectName.value;
        const makeProject = new project(projectNameInput);
        console.log(makeProject);
        addProjectBtn.classList.remove("gone");
        addProjectPopup.classList.add("gone");
        projects.push(makeProject);
        console.log(projects);
        showProjects(makeProject);
    })
    return projects;
}

export {addTask, addProject};