import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { routingActor } from "./actors/routing";
import { loginReducer } from "./reducers/auth";

/// Création du store Redux
export const store = configureStore({
  reducer: {
    auth: loginReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(routingActor);
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
