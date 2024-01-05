import { createSlice } from "@reduxjs/toolkit";

const slice_authenticated = createSlice({
  name: 'slice_authenticated',
  initialState: {
    isAuthed: false
  },
  reducers: {
    GRANT_ACCESS_TO_USER(state) {
      state.isAuthed = true
    },
    DENY_USER_ACCESS(state) {
      state.isAuthed = false
    }
  }
});

export default slice_authenticated.reducer;
export const {GRANT_ACCESS_TO_USER, DENY_USER_ACCESS} = slice_authenticated.actions;