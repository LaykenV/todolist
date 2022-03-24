console.log("h");
import {dropMenu, showProjects} from "./modules/dom";
import {task, project} from "./modules/factories";
import {addTask, addProject} from "./modules/todo";
dropMenu();
addTask();
addProject();
