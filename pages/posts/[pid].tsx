import { useGetPostQuery } from "../redux/postsApi";
import { useRouter } from "next/router";
import { PostPageStyling } from "../style/style";
import { marked } from "marked";
import SaveIcon from "../images/Bookmark.svg";
import ShareIcon from "../images/Forward.svg";
import Image from "next/image";
import Loading from "../images/loading.svg";
import lackOfImage from "../images/lackofimage.svg";
import { ILocalUser } from "../types";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { data = {}, isLoading } = useGetPostQuery(pid);

  if (isLoading)
    return (
      <div className="loading-wrapper">
        <Image className="loading" src={Loading} height={80} width={80} />
      </div>
    );
  const localUser: ILocalUser = JSON.parse(localStorage.getItem("user")!);
  const canEdit = localUser.me._id === data?.user?._id;
  const getMarkdownText = () => {
    const rawMarkup = marked(data.text, { sanitize: true });
    return { __html: rawMarkup };
  };
  return (
    <PostPageStyling>
      <div className="container">
        <div className="user-header">
          <div className="right">
            <div className="user-inner">
              <div className="leftside">
                <p className="user-name">{data.user.fullName}</p>
                <p className="post-time">{data.createdAt}</p>
              </div>
              <div className="rightside">
                {canEdit && <p>U can edit that shit</p>}
                <Image src={SaveIcon} alt="Save" width={30} height={30} />
                <Image src={ShareIcon} alt="Share" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
        <h1 className="post-title">{data.title}</h1>
        <div className="tags">
          {data.tags.map((tag: string, i: number) => (
            <div key={i} className="tag">
              {tag}
            </div>
          ))}
        </div>
        {data.imageUrl ? (
          <div
            className="cover"
            style={{
              backgroundImage: `url('http://localhost:4444${data.imageUrl}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ) : (
          <div className="lack-of-cover">
            <Image src={lackOfImage} height={60} width={60} />
          </div>
        )}
        <div className="markdown">
          <div dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
      </div>
    </PostPageStyling>
  );
}
