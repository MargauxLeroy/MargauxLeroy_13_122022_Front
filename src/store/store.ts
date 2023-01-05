import { configureStore } from "@reduxjs/toolkit";
import { routingActor } from "./actors/routing";
import { loginReducer } from "./reducers/auth";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), routingActor];
  },
});
