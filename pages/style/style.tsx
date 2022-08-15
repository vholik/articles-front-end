import styled from "styled-components";

export const FooterStyling = styled.div`
  padding: 45px 0;
  height: 400px;
  width: 100%;
  background-color: #612789;
  margin-top: 350px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rights {
    bottom: 100px;
    text-align: center;
    font-size: 18px;

    color: rgba(256, 256, 256, 0.6);
  }
  .footer-inner {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    h1 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      cursor: pointer;
      font-size: 18px;
      margin-top: 5px;
      color: rgba(256, 256, 256, 0.6);
    }
  }
`;

export const HomeStyling = styled.div`
  margin-top: 50px;
  .posts-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 25px;
  }
  .articles-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 45px;
    h1 {
      font-size: 50px;
      font-weight: 500;
      color: var(--black);
      span {
        margin-right: 8px !important;
      }
    }
    select {
      border: none;
      height: 50px;
      width: 100px;
      background: transparent;
      font-family: "Neue Montreal", sans-serif;
      font-weight: 400;
      font-size: 18px;
    }
  }
  .cover {
    .cover-inner {
      width: 100%;
      height: 600px;
      background-color: #0b7ab3;
      border-radius: 20px;
      padding: 25px;
      display: flex;
      position: relative;
      justify-content: space-between;
      .left-side {
        width: 45%;
        .title {
          margin-top: 10px;
          font-weight: 400;
          color: white;
          font-size: 48px;
          text-transform: uppercase;
        }
        .tags-wrapper {
          display: flex;
          gap: 10px;
          .tag {
            font-size: 18px;
            background-color: #612789;
            padding: 5px 15px;
            border-radius: 20px;
            color: white;
            border: none;
          }
        }

        .read-more {
          margin-top: 25px;
          padding: 10px 20px;
          font-size: 18px;
          text-transform: uppercase;
          border-radius: 20px;
          border: 1px solid white;
          background-color: transparent;
          color: white;
        }
        .author {
          position: absolute;
          bottom: 25px;
          left: 25px;
          color: white;
          text-transform: uppercase;
        }
      }
      .right-side {
        width: 45%;
        .cover-art {
          width: 100%;
          height: 100%;
          background-color: #612789;
          border-radius: 20px;
        }
      }
    }
  }
`;

export const CreateArticleStyling = styled.div`
  margin-top: 25px;
  image-wrapper {
    img {
      object-fit: cover;
    }
  }
  .file {
    margin-top: 16px;
    padding: 15px 10px;
    width: fit-content;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.6);
  }
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .send-button {
      span {
        margin-right: 4px !important;
      }
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 15px 40px;
      border: none;
      border-radius: 8px;
      width: fit-content;
      text-transform: uppercase;
      color: white;
      background-color: #612789;
      transition: background 0.2s linear;
      &:hover {
        background-color: #552079;
      }
    }
    .inputs-wrapper {
      margin-bottom: 16px;
      input {
        margin-top: 16px;
        padding: 15px 10px;
        width: 100%;
        border-radius: 4px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    img {
      height: 250px;
      object-fit: contain;
      margin: 8px 0;
    }
  }
`;

export const HeaderStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .nav {
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 32px;
    font-weight: 500;
    color: var(--black);
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  p {
    font-weight: 400;
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 35px;
    font-size: 16px;
  }
  button {
    span {
      margin-right: 8px;
    }
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 15px 40px;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    color: white;
    background-color: #612789;
    transition: background 0.2s linear;
    &:hover {
      background-color: #552079;
    }
  }
`;

export const LoginStyling = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 150px;
    font-weight: 500;
  }
  .input-wrapper {
    margin-top: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    input {
      margin-top: 16px;
      padding: 15px 10px;
      width: 500px;
      border-radius: 4px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .error {
    margin-top: 16px;
    font-size: 14px;
  }
  button {
    margin-top: 25px;
    font-size: 16px;
    padding: 15px 60px;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    color: white;
    background-color: #612789;
    transition: background 0.2s linear;
    &:hover {
      background-color: #552079;
    }
  }
  h1 {
    font-size: 41px;
    color: var(--black);
  }
`;

export const PostPageStyling = styled.div`
  margin-top: 50px;
  .lack-of-cover {
    height: 350px;
    width: 100%;
    margin: 25px 0;
    background-color: #efefef;
    position: relative;
    span {
      left: calc(50% - 30px);
      top: calc(50% - 30px);
      img {
        opacity: 0.1;
      }
    }
  }
  .markdown {
    margin-top: 25px;
    line-height: 125%;
    font-size: 20px;
    img {
      margin: 24px 0 0 0;
      width: 400px;
    }
    ol {
      list-style-position: inside;
      li {
        font-family: "Playfair Display";
        line-height: 30px;
        font-size: 18px;
      }
    }
    p {
      font-family: "Playfair Display";
      margin: 24px 0 0 0;
      line-height: 30px;
      font-size: 18px;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 48px 0 0 0;
      font-size: 36px;
      font-weight: 500;
      color: var(--black);
      line-height: 125%;
    }
  }
  .user-header {
    display: flex;
    align-items: center;
    .user-icon {
      height: 35px;
      width: 35px;
      background-color: #c8c8c8;
      border-radius: 50%;
    }
    .user-name {
      font-size: 18px;
    }
    .right {
      margin-left: 8px;
      width: 100%;
      .user-inner {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .rightside {
          display: flex;
          align-items: center;
          span {
            margin-left: 4px !important;
          }
        }
      }
      .post-time {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        margin-top: 4px;
      }
    }
  }
  .post-title {
    font-family: "Neue Montreal", sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin-top: 16px;
    color: var(--black);
  }
  .tags {
    display: flex;
    margin-top: 16px;
    .tag {
      font-weight: 400;
      padding: 5px 15px;
      border-radius: 25px;
      font-size: 14px;
      margin-right: 8px;
      color: #171717;
      background-color: #efefef;
    }
  }
  .cover {
    height: 350px;
    width: 100%;
    margin: 25px 0;
  }
  .text {
    font-size: 20px;
    line-height: 32px;
    margin-top: 16px;
  }
`;

export const PostStyling = styled.div`
  flex: 1 0 30%;
  margin-bottom: 25px;
  .bottom {
    margin-top: 5px;
    display: flex;
    align-items: center;
    .views {
      opacity: 0.6;
      margin-left: 5px;
      display: flex;
      align-items: center;
    }
  }
  .post-image {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: #0b7ab3;
  }
  .lack-of-image {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-color: #efefef;
    position: relative;
    span {
      left: calc(50% - 30px);
      top: calc(50% - 30px);
      img {
        opacity: 0.1;
      }
    }
  }
  .post-title {
    margin-top: 5px;
    font-size: 21px;
    font-weight: 500;
  }
  .author {
    color: rgba(0, 0, 0, 0.6);
  }
  .tags-wrapper {
    display: flex;
    margin-top: 10px;
    .post-tag {
      font-size: 16px;
      background-color: #612789;
      padding: 4px 15px;
      border-radius: 20px;
      color: white;
      margin-right: 5px;
      border: none;
    }
  }
`;
