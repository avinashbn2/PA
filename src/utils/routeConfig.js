import { FaCog, FaHome, FaClock } from "react-icons/fa";

export const routes = [
  { name: "AllProjects", path: "/secure/project", icon: <FaHome /> },
  { name: "Project", path: "/secure/project/:id", icon: <FaHome /> },
  { name: "Timers", path: "/secure/timers", icon: <FaClock /> },
  { name: "Settings", path: "/secure/settings", icon: <FaCog /> },
];
