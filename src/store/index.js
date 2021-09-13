import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "containers/Project/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
