import {
  useGetPostQuery,
  useSendImageMutation,
  useUpdatePostMutation,
} from "../redux/postsApi";
import { useRouter } from "next/router";
import { CreateArticleStyling } from "../style/style";
import Image from "next/image";
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SendIcon from "../images/Save.svg";
import "easymde/dist/easymde.min.css";

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function EditPost() {
  const router = useRouter();
  const { pid } = router.query;
  const { data = {}, isLoading } = useGetPostQuery(pid);
  const [user, setUser] = useState({
    isLogged: false,
    token: "",
    me: {},
  });
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")!);
    if (localUser.isLogged) {
      setUser(localUser);
    } else {
      alert("Login first");
      Router.push("/login");
    }
    if (localUser.me._id !== data?.user?._id) {
      alert("You don't have permission");
      Router.push("/login");
    }
  }, []);

  const [imageUrl, setImageUrl] = useState(data.imageUrl || "");
  const [formData, setFormData] = useState({
    title: data?.title,
    tags: data?.tags?.toString(),
  });
  const [textareaValue, setTextAreaValue] = useState(data?.text);

  const [sendImage] = useSendImageMutation();

  const [updatePost] = useUpdatePostMutation();

  const markdownHandler = useCallback((value: string) => {
    setTextAreaValue(value);
  }, []);

  const src = `http://localhost:4444${imageUrl}`;

  const imageHandler = async (e: React.ChangeEvent) => {
    const formFiles = new FormData();
    const targets = e.target as HTMLInputElement;
    if (!targets.files) {
      return;
    }
    if (targets.files) {
      const file = targets.files[0];
      formFiles.append("image", file);
      await sendImage([formFiles, user.token])
        .unwrap()
        .then((payload) => {
          console.log(payload);
          setImageUrl(payload.url);
        })
        .catch((error) => {
          alert("Error ocurred");
        });
    }
  };

  const handleSendPost = async (e: React.FormEvent) => {
    e.preventDefault();

    await updatePost({
      ...formData,
      text: textareaValue,
      imageUrl,
      _id: data._id,
    })
      .unwrap()
      .then((payload) => {
        window.location.replace(`/posts/${data._id}`);
      })
      .catch((error) => {
        alert("Error ocurred");
      });
  };

  return (
    <CreateArticleStyling>
      <div className="container">
        <div className="creating-wrapper">
          <form className="form" onSubmit={handleSendPost}>
            <div className="inputs-wrapper">
              <div className="file">
                <input
                  type="file"
                  name="uploadfile"
                  id="img"
                  style={{ display: "none" }}
                  onChange={imageHandler}
                  min="3"
                />
                <label htmlFor="img" className="image-button">
                  Click me to upload image
                </label>
              </div>
              {imageUrl && (
                <div className="image-wrapper">
                  <Image
                    loader={() => src}
                    src={src}
                    width={400}
                    height={400}
                    alt="Image"
                  />
                </div>
              )}
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Tags"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
            </div>
            <SimpleMdeEditor value={textareaValue} onChange={markdownHandler} />
            <button className="send-button" type="submit">
              <Image src={SendIcon} alt="Save" />
              Send
            </button>
          </form>
        </div>
      </div>
    </CreateArticleStyling>
  );
}
