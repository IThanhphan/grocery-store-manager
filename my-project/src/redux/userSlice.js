import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const {
  login,
  logout
} = userSlice.actions;

export default userSlice.reducer;