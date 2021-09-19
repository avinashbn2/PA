import { FaCog, FaHome, FaClock } from "react-icons/fa";

export const routes = [
  { name: "AllProjects", path: "/project", icon: <FaHome /> },
  { name: "Timers", path: "/timers", icon: <FaClock /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];
