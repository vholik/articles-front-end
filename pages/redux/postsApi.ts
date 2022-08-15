import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4444/" }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (arg: void) => `posts`,
    }),
    getPost: build.query({
      query: (id) => `posts/${id}`,
    }),
    sendImage: build.mutation({
      query: (body) => ({
        url: "upload",
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")!).token,
        },
        body: body[0],
      }),
    }),
    sendPost: build.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")!).token,
        },
        body: body[0],
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useSendPostMutation,
  useSendImageMutation,
} = postsApi;
