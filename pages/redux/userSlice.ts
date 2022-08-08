import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    token: null,
  },
  reducers: {
    addToken: (state: null | string, action: PayloadAction<string>) => {
      return { isLogged: true, token: action.payload };
    },
  },
});

export const { addToken } = userSlice.actions;
export default userSlice.reducer;
