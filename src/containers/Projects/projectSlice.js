import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { http } from "api";
import { tokenSelector } from "containers/Auth/authSlice";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (state, { getState }) => {
    const resp = await http("project?limit=100", {
      token: tokenSelector(getState),
    });
    console.log("resp", resp);
    return resp.results;
  }
);

export const addProject = createAsyncThunk(
  "projects/addProject",

  async ({ name, description }, { getState }) => {
    await http("project", {
      body: JSON.stringify({
        name,
        description,
      }),
      token: tokenSelector(getState),
    });
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
    addProject: (state, action) => {
      const { task, id: pid } = action.payload;
      const projects = [...state.data];
      const projectIdx = projects.findIndex((p) => p._id === pid);
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
    removeProject: (state, action) => {
      const projects = [...state.data];

      const { task, pid } = action;
      const project = projects.filter((p) => p._id === pid);
      project.tasks.filter((t) => t._id === task);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        console.log("action", action);
        state.status = "success";
        state.data = action.payload;
      })
      .addMatcher(
        isAnyOf(getProjects.rejected, addProject.rejected),
        (state, action) => {
          state.status = "rejected";
        }
      )
      .addMatcher(
        isAnyOf(getProjects.pending, addProject.pending),
        (state, action) => {
          state.status = "loading";
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = projectSlice.actions;

export default projectSlice.reducer;
