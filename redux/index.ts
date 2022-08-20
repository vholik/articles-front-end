import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";
import { authApi } from "./authApi";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
