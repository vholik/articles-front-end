import type { NextPage } from "next";
import { post } from "./types";
import { Post } from "./components/Post";
import { useGetPostsQuery } from "./redux/postsApi";
import Image from "next/image";
import { HomeStyling } from "./style/style";
import Link from "next/link";
import { useState } from "react";
import Loading from "./images/loading.svg";

const Home: NextPage = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  const [sortingBy, setSortingBy] = useState("new");

  if (isLoading)
    return (
      <div className="loading-wrapper">
        <Image className="loading" src={Loading} height={80} width={80} />
      </div>
    );

  const lastPost = data[data.length - 1];
  console.log(data);

  return (
    <HomeStyling>
      <div className="container-header">
        {lastPost && (
          <div className="cover">
            <div className="cover-inner">
              <div className="left-side">
                <div className="tags-wrapper">
                  {lastPost.tags.map((tag: string, i: number) => (
                    <div key={i} className="tag">
                      {tag}
                    </div>
                  ))}
                </div>
                <h1 className="title">{lastPost.title}</h1>
                <Link href={`posts/${lastPost._id}`}>
                  <button className="read-more">Read More</button>
                </Link>
                <p className="author">
                  {lastPost.user.fullName}, {lastPost.user.createdAt}
                </p>
              </div>
              <div className="right-side">
                <div
                  className="cover-art"
                  style={{
                    backgroundImage: `url('http://localhost:4444${lastPost.imageUrl}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container-header">
        <div className="articles-title">
          <h1>ALL ARTICLES</h1>
          <select
            name="sorting"
            id="sorting"
            onChange={(e) => setSortingBy(e.target.value)}
          >
            <option value="new">Newest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
        <div className="posts-wrapper">
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
      </div>
    </HomeStyling>
  );
};

export default Home;
