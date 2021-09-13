import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    const resp = await fetch("http://localhost:4000/projects");
    const dt = await resp.json();
    return dt;
  }
);

const initialState = {
  data: [{ id: "p12", tasks: [], name: "New Project" }],
  status: "idle",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task, id: pid } = action.payload;
      const projects = [...state.data];
      const projectIdx = projects.findIndex((p) => p.id === pid);
      if (projectIdx > -1) {
      }
      const project = projects[projectIdx];
      if (project.tasks) {
        project.tasks.push(task);
      } else {
        project.tasks = [task];
      }
      projects[projectIdx] = project;
    },
    removeTask: (state, action) => {
      const projects = [...state.data];

      const { task, pid } = action;
      const project = projects.filter((p) => p.id === pid);
      project.tasks.filter((t) => t.id === task);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        console.log("action", action);
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = projectSlice.actions;

export default projectSlice.reducer;
