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

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, previous, ...body }, { getState }) => {
    try {
      const resp = await http(`task/${id}`, {
        token: tokenSelector(getState),
        body,
        method: "PUT",
      });
      return resp;
    } catch (err) {
      console.log("err", err);
    }
  }
);
export const taskSlice = createSlice({
  name: "taskBoard",
  initialState,
  reducers: {
    setProject: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTask.pending, (state, action) => {
        state.status = "loading";

        const newStatus = action?.meta?.arg?.status;
        console.log("action", action);
        const prevTask = action?.meta?.arg?.previous;
        const index = state.tasks[prevTask?.status]?.findIndex(
          (t) => t._id === prevTask._id
        );
        // remove from old section
        state.tasks[prevTask?.status].splice(index, 1);
        // add to new section
        const newTask = { ...prevTask };
        newTask.status = newStatus;
        if (state.tasks[newStatus]) {
          state.tasks[newStatus].push(newTask);
        } else {
          state.tasks[newStatus] = [newTask];
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        const statuses = action.payload.statuses;
        const sortedStatuses = statuses
          .sort((st, st2) => st.order < st2.order)
          .map((s) => s.name);
        state.statusGroups = sortedStatuses;

        const tasks = action.payload.tasks;
        const tasksByStatus = tasks.reduce((a, task) => {
          const status = `${task.status}`;

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
      })
      .addCase(updateTask.rejected, (state, action) => {
        console.log("action", action);
        state.status = "Failed to update";
      })
      .addCase(getTasks.pending, (state) => {
        state.status = "loading";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProject } = taskSlice.actions;

export default taskSlice.reducer;
