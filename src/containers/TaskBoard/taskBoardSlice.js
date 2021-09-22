import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { http } from "api";
import { tokenSelector } from "containers/Auth/authSlice";

const initialState = {
  data: {},
  status: "idle",
};
export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (id, { getState }) => {
    const resp = await http(`project/${id}`, {
      token: tokenSelector(getState),
    });
    return resp;
  }
);
export const taskSlice = createSlice({
  name: "taskBoard",
  initialState,
  reducers: {
    setProject: (state, action) => {},
    // addTask: (state, action) => {
    //   const { task, id: pid } = action.payload;
    //   const tasks = [...state.data];
    //   const taskIdx = tasks.findIndex((p) => p._id === pid);
    //   if (taskIdx > -1) {
    //   }
    //   const task = tasks[taskIdx];
    //   if (task.tasks) {
    //     task.tasks.push(task);
    //   } else {
    //     task.tasks = [task];
    //   }
    //   tasks[taskIdx] = task;
    // },
    // removeTask: (state, action) => {
    //   const tasks = [...state.data];
    //   const { task, pid } = action;
    //   const task = tasks.filter((p) => p._id === pid);
    //   task.tasks.filter((t) => t._id === task);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        const tasks = action.payload.tasks;
        const tasksByStatus = tasks.reduce((a, task) => {
          const status = `${task.status}`;
          console.log("a task", a, task);

          if (a && a[status] && Array.isArray(a[status])) {
            a[status].push(task);
          } else {
            a[status] = [task];
          }
          return a;
        }, {});
        state.tasks = tasksByStatus;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProject } = taskSlice.actions;

export default taskSlice.reducer;
console.log("taskSlice.reducer", taskSlice.reducer);
