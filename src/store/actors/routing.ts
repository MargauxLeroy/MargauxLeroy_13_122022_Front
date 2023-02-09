import { AnyAction } from "@reduxjs/toolkit";
import { authActions } from "../reducers/auth";
import { router } from "../../Routes";

const { login, logout } = authActions;

/// Création d'un middleware pour gérer la navigation
export const routingActor =
  (store: any) => (dispatch: any) => (action: AnyAction) => {
    if (login.fulfilled.match(action)) {
      router.navigate("/user");
    }
    if (login.rejected.match(action)) {
      /// Le message d'erreur géré dans le reducer
    }
    if (logout.match(action)) {
      router.navigate("/");
    }

    dispatch(action);
  };

export { router };
