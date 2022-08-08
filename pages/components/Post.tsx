import { NextPage } from "next";
import { IPost } from "../types";
import { PostStyling } from "../style/style";

import Link from "next/link";
export const Post: NextPage<IPost> = ({ tags, text, title, id }) => {
  return (
    <PostStyling>
      <Link href={`posts/${id}`}>
        <div>
          <div className="user-header">
            <div className="user-icon"></div>
            <h2 className="user-name">Adam Gross</h2>
          </div>
          <div className="post-body">
            <div className="left">
              <h1 className="post-title">{title}</h1>
              <p className="post-text">{text.slice(0, 200)}...</p>
            </div>
            <div className="right">
              <div className="post-image"></div>
            </div>
          </div>
          <div className="post-bottom">
            <div className="tags-wrapper">
              {tags.map((tag, i) => (
                <div key={i} className="post-tag">
                  {tag}
                </div>
              ))}
            </div>
            <p className="post-time">3 min read</p>
          </div>
        </div>
      </Link>
    </PostStyling>
  );
};
