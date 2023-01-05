import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Credentials, apiLogin } from "../../services/login";

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
};

const initialState: Auth = {
  isLoading: false,
  login: {
    token: null,
    status: "DISCONNECTED",
  },
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, thunkAPI) => {
    /// Fetch token from API
    const token = await apiLogin(credentials);

    if (token == null) {
      throw new Error("Empty token");
    }

    return token;
  }
);

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
  },
});

export const authActions = {
  ...sliceActions,
  login: login,
};

export const loginReducer = sliceReducer;
