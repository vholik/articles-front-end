import type { NextPage } from "next";
import { post } from "./types";
import { Post } from "./components/Post";
import { useGetPostsQuery } from "./redux/postsApi";
import Image from "next/image";
import { HomeStyling } from "./style/style";
import { useState } from "react";
import Loading from "./images/loading.svg";
import Recent from "./images/recent.svg";
import Popular from "./images/popular.svg";

const Home: NextPage = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  const [sortingBy, setSortingBy] = useState("new");

  if (isLoading)
    return (
      <div className="loading-wrapper">
        <Image
          className="loading"
          src={Loading}
          height={80}
          width={80}
          alt="Loading"
        />
      </div>
    );
  const popularPosts = [...data].sort((a, b) => b.viewsCount - a.viewsCount);
  const popularTags = (): [] | Array<string> => {
    let tags: Array<string> = [];
    popularPosts.map((post: post) => {
      if (tags.length < 6) {
        tags.push(...post.tags);
      } else {
        return;
      }
    });
    return tags;
  };

  return (
    <HomeStyling>
      <div className="container">
        <div className="tags-wrapper">
          <div className="tags-title"></div>
        </div>
        <div className="posts-wrapper">
          <div className="filter">
            <button
              className={sortingBy === "new" ? "active" : ""}
              onClick={() => setSortingBy("new")}
            >
              <Image src={Recent} alt="Recent" />
              Recent
            </button>
            <button
              className={sortingBy === "popular" ? "active" : ""}
              onClick={() => setSortingBy("popular")}
            >
              <Image src={Popular} alt="Recent" />
              Popular
            </button>
          </div>
          {sortingBy === "new"
            ? [...data]
                .reverse()
                .map((post: post) => (
                  <Post
                    key={post._id}
                    id={post._id}
                    tags={post.tags}
                    title={post.title}
                    text={post.text}
                    fullName={post.user.fullName}
                    viewsCount={post.viewsCount}
                    imageUrl={post.imageUrl!}
                  />
                ))
            : [...data]
                .sort((a, b) => b.viewsCount - a.viewsCount)
                .map((post: post) => (
                  <Post
                    key={post._id}
                    id={post._id}
                    tags={post.tags}
                    title={post.title}
                    text={post.text}
                    fullName={post.user.fullName}
                    viewsCount={post.viewsCount}
                    imageUrl={post.imageUrl!}
                  />
                ))}
        </div>
        <div className="popular-tags-wrapper">
          <h1 className="popular-tags-title">Popular tags</h1>
          {popularTags().map((tag: string, index: number) => (
            <div className="tag" key={index}>
              #{tag.trim()}
            </div>
          ))}
        </div>
      </div>
    </HomeStyling>
  );
};

export default Home;
