import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useSendPostMutation, useSendImageMutation } from "./redux/postsApi";
import { CreateArticleStyling } from "./style/style";
import { useCallback } from "react";
import "easymde/dist/easymde.min.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import SaveIcon from "./images/save.svg";
import Head from "next/head";

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const CreateArticle: NextPage = () => {
  const [user, setUser] = useState({
    isLogged: false,
    token: null,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user")!);
    if (saved?.isLogged) {
      setUser(saved);
    } else {
      alert("Create an account first");
      Router.push(`/login`);
    }
  }, []);

  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
  });
  const [textareaValue, setTextAreaValue] = useState("");

  const [sendImage] = useSendImageMutation();

  const [sendPost] = useSendPostMutation();

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

    await sendPost({ ...formData, text: textareaValue, imageUrl })
      .unwrap()
      .then((payload) => {
        console.log(payload);
        Router.push(`posts/${payload._id}`);
      })
      .catch((error) => {
        alert("Error ocurred");
      });
  };

  return (
    <CreateArticleStyling>
      <Head>
        <title>Create an article - Articleholik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Tags"
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
            </div>
            <SimpleMdeEditor value={textareaValue} onChange={markdownHandler} />
            <button className="send-button" type="submit">
              <Image src={SaveIcon} alt="Send" />
              Send
            </button>
          </form>
        </div>
      </div>
    </CreateArticleStyling>
  );
};

export default CreateArticle;
