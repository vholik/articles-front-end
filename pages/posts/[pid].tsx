import { useGetPostQuery } from "../redux/postsApi";
import { useRouter } from "next/router";
import { PostPageStyling } from "../style/style";
import { marked } from "marked";
import Image from "next/image";
import Loading from "../images/loading.svg";
import lackOfImage from "../images/lackofimage.svg";
import { ILocalUser } from "../types";
import Link from "next/link";
import Trash from "../images/delete.svg";
import Edit from "../images/Edit.svg";
import { useDeletePostMutation } from "../redux/postsApi";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { data = {}, isLoading } = useGetPostQuery(pid);
  const [deleteUser] = useDeletePostMutation();

  if (isLoading && !data._id)
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
  const localUser: ILocalUser = JSON.parse(localStorage.getItem("user")!);
  const canEdit = localUser?.me._id === data?.user?._id;
  const getMarkdownText = () => {
    const rawMarkup = marked(data.text ? data.text : "", { sanitize: true });
    return { __html: rawMarkup };
  };

  const deleteHandler = async () => {
    await deleteUser(data._id)
      .unwrap()
      .then((payload) => {
        alert("Post succesfully deleted");
        window.location.replace("/");
      })
      .catch((error) => {
        alert("Error occured");
        console.log(error);
      });
  };
  return (
    <PostPageStyling>
      <div className="container">
        <div className="post-wrapper">
          <div className="user-header">
            <div className="right">
              <div className="user-inner">
                <div className="leftside">
                  <p className="user-name">{data?.user?.fullName}</p>
                  <p className="post-time">{data?.createdAt}</p>
                </div>
                {canEdit && (
                  <div className="rightside">
                    <Link href={`/edit/${pid}`}>
                      <Image src={Edit} alt="Edit" />
                    </Link>
                    <Image src={Trash} alt="Delete" onClick={deleteHandler} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <h1 className="post-title">{data?.title}</h1>
          <div className="tags">
            {data?.tags?.map((tag: string, i: number) => (
              <div key={i} className="tag">
                #{tag.trim()}
              </div>
            ))}
          </div>
          {data?.imageUrl ? (
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
              <Image src={lackOfImage} height={60} width={60} alt="No image" />
            </div>
          )}
          <div className="markdown">
            <div dangerouslySetInnerHTML={getMarkdownText()} />
          </div>
        </div>
      </div>
    </PostPageStyling>
  );
}
