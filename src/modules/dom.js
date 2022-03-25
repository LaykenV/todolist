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
    newDiv.classList.add("projectlistitem");
     newDiv.textContent = `${arr.title}`;
    const projectList = document.querySelector(".projectselector");
    projectList.appendChild(newDiv);
}

const showTasks = function(taskk) {
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

const allTasks = function(arr) {
    const taskList = document.querySelector(".tasklist");
    for (let i = 0; i < arr.length; i++) {
        const item = document.querySelector(".tasklist");
        if (!item.innerHTML == "") {
            taskList.removeChild(taskList.lastChild);
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newDiv = document.createElement("div");
        newDiv.classList.add("task");
        const newBtn = document.createElement("button");
        newBtn.classList.add("taskbutton");
        const newTaskName = document.createElement("p");
        newTaskName.classList.add("taskdesc");
        newTaskName.textContent = `${element.title}`;
        const newTaskDate = document.createElement("p");
        newTaskDate.classList.add("taskdate");
        newTaskDate.textContent = `${element.dueDate}`;
        taskList.appendChild(newDiv);
        newDiv.appendChild(newBtn);
        newDiv.appendChild(newTaskName);
        newDiv.appendChild(newTaskDate);
        console.log("works");
        if (`${element.priority}` == "lowpriority") {
            newDiv.style.border = "solid yellow 2px";
        }
        else if (`${element.priority}` == "highpriority") {
            newDiv.style.border = "solid red 2px"
        }

        
    }
}

const todaysTasks = function(arr) {
    let date = new Date();
    let day = date.getDate();
    let month = (date.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let year = date.getFullYear();
    let fullDate = `${year}-${month}-${day}`;
    const taskList = document.querySelector(".tasklist");
    for (let i = 0; i < arr.length; i++) {
        const item = document.querySelector(".tasklist");
        if (!item.innerHTML == "") {
            taskList.removeChild(taskList.lastChild);
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log("working");
        console.log(element.dueDate);
        console.log(fullDate);
        if (element.dueDate == fullDate) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("task");
            const newBtn = document.createElement("button");
            newBtn.classList.add("taskbutton");
            const newTaskName = document.createElement("p");
            newTaskName.classList.add("taskdesc");
            newTaskName.textContent = `${element.title}`;
            const newTaskDate = document.createElement("p");
            newTaskDate.classList.add("taskdate");
            newTaskDate.textContent = `${element.dueDate}`;
            taskList.appendChild(newDiv);
            newDiv.appendChild(newBtn);
            newDiv.appendChild(newTaskName);
            newDiv.appendChild(newTaskDate);
            console.log("works");
            if (`${element.priority}` == "lowpriority") {
                newDiv.style.border = "solid yellow 2px";
            }
            else if (`${element.priority}` == "highpriority") {
                newDiv.style.border = "solid red 2px"
            }
        }
        
    }
}

const updateProjects = function () {
    let projectItem = document.querySelectorAll(".projectlistitem");
    return projectItem = document.querySelectorAll(".projectlistitem");
}

const kk = function (arr) {
    let projectItem = document.querySelectorAll(".projectlistitem");
    const taskList = document.querySelector(".tasklist");
    updateProjects();
    for (let i = 0; i < projectItem.length; i++) {
    console.log(projectItem[i]);
    projectItem[i].addEventListener("click", function() {
            const pr = projectItem[i].textContent;
            console.log(pr);
            for (let i = 0; i < arr.length; i++) {
                const item = document.querySelector(".tasklist");
                if (!item.innerHTML == "") {
                    taskList.removeChild(taskList.lastChild);
                }
                
            }
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element.description == pr) {
                    const taskList = document.querySelector(".tasklist");
                    const newDiv = document.createElement("div");
                newDiv.classList.add("task");
                const newBtn = document.createElement("button");
                newBtn.classList.add("taskbutton");
                const newTaskName = document.createElement("p");
                newTaskName.classList.add("taskdesc");
                newTaskName.textContent = `${element.title}`;
                const newTaskDate = document.createElement("p");
                newTaskDate.classList.add("taskdate");
                newTaskDate.textContent = `${element.dueDate}`;
                taskList.appendChild(newDiv);
                newDiv.appendChild(newBtn);
                newDiv.appendChild(newTaskName);
                newDiv.appendChild(newTaskDate);
                console.log("works");
                if (`${element.priority}` == "lowpriority") {
                    newDiv.style.border = "solid yellow 2px";
                }
                else if (`${element.priority}` == "highpriority") {
                    newDiv.style.border = "solid red 2px"
                }
                }
                
            }
    })
    
}}
export {dropMenu, showProjects, showTasks, allTasks, todaysTasks, kk, updateProjects};