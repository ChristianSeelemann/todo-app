import "./taskItem.css";
import "./taskList.css";
import "./taskNavigation.css";
import taskItemRegular from "./taskItemRegular.html";
import taskItemDone from "./taskItemDone.html";
import taskList from "./taskList.html";
import taskNavigation from "./taskNavigation.html";

export default {
  title: "Components/TaskList",
  parameters: { layout: "centered" },
};

export const itemRegular = () => taskItemRegular;
export const itemDone = () => taskItemDone;
export const list = () => taskList;
export const navigation = () => taskNavigation;
