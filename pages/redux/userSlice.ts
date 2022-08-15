import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    token: "",
    me: {},
  },
  reducers: {
    addToken: (state, action: PayloadAction<any>) => {
      return {
        isLogged: true,
        token: action.payload.token,
        me: action.payload,
      };
    },
    logOut: () => {
      return { isLogged: false, token: "", me: {} };
    },
  },
});

export const { addToken, logOut } = userSlice.actions;
export default userSlice.reducer;
