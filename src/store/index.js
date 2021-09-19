import { configureStore } from "@reduxjs/toolkit";
import taskBoardReducer from "containers/TaskBoard/taskBoardSlice";
import projectsReducer from "containers/Projects/projectSlice";

export const store = configureStore({
  reducer: {
    taskBoard: taskBoardReducer,
    project: projectsReducer,
  },
});
