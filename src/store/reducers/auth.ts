import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Credentials, apiLogin } from "../../services/login";
import { apiProfile, UserData, UserDataExtended } from "../../services/profil";
import { AppState } from "../store";

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

const initialState: Auth = {
  isLoading: false,
  login: {
    token: null,
    status: "DISCONNECTED",
  },
};

/// Login Async
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    /// Fetch token from API
    const token = await apiLogin(credentials);

    if (token == null) {
      throw new Error("Empty token");
    }

    return token;
  }
);

/// Profile Async
export const profile = createAsyncThunk<
  UserDataExtended,
  undefined,
  {
    state: AppState;
  }
>("auth/profile", async (_, thunkAPI) => {
  /// TODO: Get token for fetching user data
  const token = thunkAPI.getState().auth.login.token;

  if (token == null) {
    throw new Error("Empty token");
  }

  /// Fetch user data from API
  const userData = await apiProfile(token);

  return userData;
});

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
    /// Login
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
    /// Profile
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
    // TODO: Rejected case
    builder.addCase(profile.rejected, (state, action) => {
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
};

export const loginReducer = sliceReducer;
