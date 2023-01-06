import { configureStore } from "@reduxjs/toolkit";
import { routingActor } from "./actors/routing";
import { loginReducer } from "./reducers/auth";

export const store = configureStore({
  reducer: {
    auth: loginReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [routingActor, ...getDefaultMiddleware()];
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
