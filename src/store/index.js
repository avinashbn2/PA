import { configureStore, combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "containers/Projects/projectSlice";
import authReducer from "containers/Auth/authSlice";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import taskBoardReducer from "containers/TaskBoard/taskBoardSlice";
import history from "./utils";
const persistConfig = {
  key: "my_dashboard",
  storage,
};

const rootReducer = combineReducers({
  taskBoard: taskBoardReducer,
  project: projectsReducer,
  auth: authReducer,
  // router: connectRouter(history),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(routerMiddleware(history)),
});

export const persistor = persistStore(store);
