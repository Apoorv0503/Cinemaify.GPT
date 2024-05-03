import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //The "addUser"(action creator OR action name) is linked to a callback reducer function that will get triggered when some action is dispatched.
    //This reducer function takes the current state (state) and an action (action) as parameters. It updates the state by returning the payload of the action
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
