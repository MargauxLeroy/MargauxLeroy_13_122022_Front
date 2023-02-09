import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../services/profil";
import { login, profile, updateProfile } from "./thunks";

/// Création du type de l'Auth
type Auth = {
  isLoading: boolean;
  login:
    | {
        error?: string;
        token: null;
        status: "DISCONNECTED";
      }
    | {
        token: string;
        status: "CONNECTED";
      };
  userData?: UserData;
};

/// Création du state initial de l'application
const initialState: Auth = {
  isLoading: false,
  login: {
    token: null,
    status: "DISCONNECTED",
  },
};

/// Création du reducer et des actions
const { actions: sliceActions, reducer: sliceReducer } = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = false;
      state.login = {
        status: "DISCONNECTED",
        token: null,
      };
    },
  },
  extraReducers: (builder) => {
    /// Login ///
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.login = {
        status: "CONNECTED",
        token: action.payload,
      };
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;

      if (action.payload instanceof Error) {
        state.login = {
          status: "DISCONNECTED",
          token: null,
          error: action.payload.message,
        };
      } else {
        state.login = {
          status: "DISCONNECTED",
          token: null,
          error: "Unknown Error",
        };
      }
    });
    /// Profile ///
    builder.addCase(profile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(profile.fulfilled, (state, action) => {
      state.isLoading = false;

      state.userData = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    });
    builder.addCase(profile.rejected, (state) => {
      state.isLoading = false;

      state.login = {
        status: "DISCONNECTED",
        token: null,
        error: "L'adresse mail ou le mot de passe est incorrect",
      };
    });
    /// Update Profile ///
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;

      state.login = {
        status: "DISCONNECTED",
        token: null,
        error: "Unknown Error",
      };
    });
  },
});

export const authActions = {
  ...sliceActions,
  login: login,
  profile: profile,
  updateProfile: updateProfile,
};

export const loginReducer = sliceReducer;
