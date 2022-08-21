import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { post } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://articlesholik.herokuapp.com",
  }),
  endpoints: (build) => ({
    getPosts: build.query<post[], void>({
      query: () => `posts`,
    }),
    getPost: build.query<post, string>({
      query: (id) => `posts/${id}`,
    }),
    sendImage: build.mutation<{ url: string }, any>({
      query: (body) => ({
        url: "upload",
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")!).token,
        },
        body: body,
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
    deletePost: build.mutation<string, any>({
      query: (id: string) => ({
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
