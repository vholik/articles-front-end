import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://articlesholik.herokuapp.com",
  }),
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
