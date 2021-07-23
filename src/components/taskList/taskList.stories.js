import "./taskList.css";
import taskList from "./taskList.html";
import "./taskListNavigation.css";
import taskListNavigation from "./taskListNavigation.html";

export default {
  title: "Components/TaskList",
  parameters: { layout: "fullscreen" },
};

export const taskListComponent = () => taskList;
export const taskListNavigationComponent = () => taskListNavigation;
