import { task } from "./factories";

const dropMenu = function() {
    const dropDownBtn = document.querySelector(".dropbutton");
    const dropDown = document.querySelector(".dropdown");
    console.log("works");
    dropDown.classList.add("gone");
    dropDownBtn.addEventListener("click", function() {
       dropDown.classList.toggle("gone");
    });
}

const showProjects = function(arr) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dropdownbutton");
     newDiv.textContent = `${arr.title}`;
    const projectList = document.querySelector(".projectselector");
    projectList.appendChild(newDiv);
}

const showTasks = function(arr, taskk) {
    const taskList = document.querySelector(".tasklist");
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    const newBtn = document.createElement("button");
    newBtn.classList.add("taskbutton");
    const newTaskName = document.createElement("p");
    newTaskName.classList.add("taskdesc");
    newTaskName.textContent = `${taskk.title}`;
    const newTaskDate = document.createElement("p");
    newTaskDate.classList.add("taskdate");
    newTaskDate.textContent = `${taskk.dueDate}`;
    taskList.appendChild(newDiv);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(newTaskName);
    newDiv.appendChild(newTaskDate);
    if (`${taskk.priority}` == "lowpriority") {
            newDiv.style.border = "solid yellow 2px";
    }
    else if (`${taskk.priority}` == "highpriority") {
            newDiv.style.border = "solid red 2px"
    }
}
export {dropMenu, showProjects, showTasks};