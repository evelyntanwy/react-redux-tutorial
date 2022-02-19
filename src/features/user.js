// createSlice allows you to create the reducer is an easy way and very intuitive
import { createSlice } from "@reduxjs/toolkit";

// state - holds info the previous info of the state
// action - passing in the info that you want to change

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
