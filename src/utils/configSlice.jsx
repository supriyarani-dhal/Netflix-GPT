import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = config.actions;
export default config.reducer;
