import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface UserState {
  email: string;
  role: string;
  exp: string;
  iat: string;
}

interface AuthState {
  user: UserState | null;
  token: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
