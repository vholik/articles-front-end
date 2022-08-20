import { NextPage } from "next";
import { IPost } from "../types";
import { PostStyling } from "../style/style";
import Image from "next/image";
import Link from "next/link";
import lackOfImage from "../images/lackofimage.svg";
import Eye from "../images/showsCount.svg";

const Post: NextPage<IPost> = ({
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
        <div className="post-wrapper">
          <div className="top">
            <p className="author">{fullName}</p>
            <div className="shows-count">
              <Image src={Eye} alt="Shows count" />
              <p>{viewsCount}</p>
            </div>
          </div>
          <h1 className="post-title">{title}</h1>
          {imageUrl ? (
            <div
              className="post-image"
              style={{
                backgroundImage: `url('${process.env.API_URL}${imageUrl}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ) : (
            <div className="lack-of-image">
              <Image src={lackOfImage} height={45} width={45} alt="no image" />
            </div>
          )}

          <div className="tags-wrapper">
            {tags.map((tag, i) => (
              <div key={i} className="post-tag">
                #{tag.trim()}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </PostStyling>
  );
};

export default Post;
