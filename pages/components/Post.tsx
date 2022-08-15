import { NextPage } from "next";
import { IPost } from "../types";
import { PostStyling } from "../style/style";
import Eye from "../images/Eye.svg";
import Image from "next/image";
import Link from "next/link";
import lackOfImage from "../images/lackofimage.svg";

export const Post: NextPage<IPost> = ({
  tags,
  text,
  title,
  id,
  fullName,
  viewsCount,
  imageUrl,
}) => {
  return (
    <PostStyling>
      <Link href={`posts/${id}`}>
        <div>
          {imageUrl ? (
            <div
              className="post-image"
              style={{
                backgroundImage: `url('http://localhost:4444${imageUrl}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div className="lack-of-image">
              <Image src={lackOfImage} height={60} width={60} />
            </div>
          )}

          <div className="tags-wrapper">
            {tags.map((tag, i) => (
              <div key={i} className="post-tag">
                {tag}
              </div>
            ))}
          </div>
          <h1 className="post-title">{title}</h1>
          <div className="bottom">
            <p className="author">{fullName}</p>
            <p className="views">
              <Image src={Eye} height={25} width={25} />
              {viewsCount}
            </p>
          </div>
        </div>
      </Link>
    </PostStyling>
  );
};
