import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin, Credentials } from "../../services/login";
import {
  apiProfile,
  apiUpdateProfile,
  UserData,
  UserDataExtended,
} from "../../services/profil";
import { AppState } from "../store";

///// Login Async /////
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    try {
      /// On récupère le token depuis l'API à l'aide des identifiants
      const token = await apiLogin(credentials);

      if (token == null) throw new Error("Empty token");

      return token;
    } catch (error) {
      throw new Error("L'identifiant ou le mot de passe est incorrect");
    }
  }
);

///// Profile Async /////
export const profile = createAsyncThunk<
  UserDataExtended,
  undefined,
  {
    state: AppState;
  }
>("auth/profile", async (_, thunkAPI) => {
  /// On récupère le token depuis le state de l'application
  const token = thunkAPI.getState().auth.login.token;

  if (token == null) throw new Error("Empty token");

  /// On récupère les données de l'utilisateur depuis l'API grâce au token
  const userData = await apiProfile(token);

  return userData;
});

///// Update Profile Async /////
export const updateProfile = createAsyncThunk<
  UserDataExtended,
  UserData,
  {
    state: AppState;
  }
>("auth/updateProfile", async (updatedUserData: UserData, thunkAPI) => {
  /// On récupère le token depuis le state de l'application
  const token = thunkAPI.getState().auth.login.token;

  if (token == null) throw new Error("Empty token");

  /// On met à jour les données de l'utilisateur grâce au token
  const userData = await apiUpdateProfile(token, updatedUserData);

  return userData;
});
