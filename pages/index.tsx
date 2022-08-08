import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { post } from "./types";
import { Post } from "./components/Post";
import { useGetPostsQuery } from "./redux/postsApi";
import { useSelector } from "react-redux";
import { useAppSelector } from "./redux/hook";
import { Header } from "./components/Header";

const Home: NextPage = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      {data.map((post: post) => (
        <Post
          key={post._id}
          id={post._id}
          tags={post.tags}
          title={post.title}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default Home;
