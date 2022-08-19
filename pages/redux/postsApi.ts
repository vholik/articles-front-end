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
        body: body,
      }),
    }),
    updatePost: build.mutation({
      query: (body) => ({
        url: `/posts/${body._id}`,
        method: "PATCH",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")!).token,
        },
        body: body,
      }),
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")!).token,
        },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useSendPostMutation,
  useSendImageMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
