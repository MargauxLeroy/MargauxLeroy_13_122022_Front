import { AnyAction } from "@reduxjs/toolkit";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { getRoutes } from "../../Routes";
import { authActions } from "../reducers/auth";

const { login, logout } = authActions;

export const router = createBrowserRouter(
  createRoutesFromElements(getRoutes())
);

export const routingActor =
  (store: any) => (dispatch: any) => (action: AnyAction) => {
    if (login.fulfilled.match(action)) {
      router.navigate("/user");
    }
    if (login.rejected.match(action)) {
      // TODO: Gérer le msg d'erreur
      console.log("Gérer un msg erreur");
    }
    if (logout.match(action)) {
      router.navigate("/");
    }

    dispatch(action);
  };
