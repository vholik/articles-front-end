import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    sendUser: build.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUserMutation, useSendUserMutation } = authApi;
