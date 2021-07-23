import "./hamburger.css";
import hamburger from "./hamburger.html";
import "./notification.css";
import notification from "./notification.html";

export default {
  title: "Components/Icons",
  parameters: { layout: "fullscreen" },
};

export const HamburgerIcon = () => hamburger;
export const NotificationIcon = () => notification;
