import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { http } from "api";
import history from "store/utils";

import { localStorageKey } from "utils/constants";

export const tokenSelector = (getState) => {
  const state = getState();

  return state?.auth?.tokens?.access?.token;
};

export const login = createAsyncThunk(
  "auth/login",
  async (body, { dispatch }) => {
    try {
      const resp = await http("auth/login", { body });

      return resp.tokens;
    } catch (err) {
      throw err;
    }
  }
);

export const register = createAsyncThunk("auth/register", async (body) => {
  const resp = await http("auth/register", { body });
  return resp.tokens;
});

const initialState = {
  tokens: null,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = initialState.status;
    },
    logout: (state) => {
      state.tokens = null;
      state.status = initialState.status;
      history?.replace("/login");
    },
  },
  extraReducers: (builder, ...others) => {
    builder
      .addMatcher(
        isAnyOf(login.fulfilled, register.fulfilled),
        (state, action) => {
          state.status = "success";
          state.tokens = action.payload;
          localStorage.setItem(localStorageKey, action.payload);
        }
      )
      .addMatcher(
        isAnyOf(login.rejected, register.rejected),
        (state, action) => {
          console.log("action", action);
          state.status = "rejected";
        }
      )
      .addMatcher(isAnyOf(login.pending, register.pending), (state, action) => {
        state.status = "loading";
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetState, logout } = authSlice.actions;

export default authSlice.reducer;
