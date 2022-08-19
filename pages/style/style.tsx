import styled from "styled-components";

export const HeaderStyling = styled.div`
  margin-top: 25px;
  .logo {
    cursor: pointer;
  }
  .middle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
    .input-wrapper {
      position: relative;
      width: 60%;
      display: flex;
      flex-direction: row-reverse;
      &:hover .search-result {
        display: block;
      }
      .search-result {
        overflow-y: scroll;
        overflow-x: hidden;
        display: none;
        z-index: 5;
        position: absolute;
        background-color: var(--background);
        width: 100%;
        height: 300px;
        left: 0;
        border-radius: 12px;
        bottom: -300px;
        border: 1px solid var(--border);
        padding: 14px;
        .searched-post {
          color: var(--second-text-color);
          font-size: 18px;
          padding: 20px 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.1s linear;
          &:hover {
            background-color: var(--border);
          }
        }
      }
      .search-input {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: var(--background);
        color: var(--second-text-color);
        font-size: 16px;
        padding: 23px 16px;
        font-family: Inter;
        border-radius: 12px;
        border: 1px solid var(--border);
        font-weight: 400;
        transition: color 0.2s linear;
        outline: none;
        &:focus {
          color: #ffffff;
          border: 1px solid var(--primary);
        }
        &:hover {
          color: #ffffff;
        }
      }
      span {
        right: 16px;
      }
    }
    .write-btn {
      background-color: var(--background);
      color: var(--second-text-color);
      font-size: 16px;
      padding: 23px 16px;
      cursor: pointer;
      display: flex;
      gap: 10px;
      font-family: Inter;
      border-radius: 12px;
      border: 1px solid var(--border);
      font-weight: 500;
      transition: color 0.2s linear;
      &:hover {
        color: #ffffff;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: row-reverse;
    .right__inner {
      display: flex;
      .login-btn {
        margin-right: 10px;
        height: 100%;
        font-size: 16px;
        display: flex;
        gap: 10px;
        border: 0;
        background-color: transparent;
        color: white;
        padding: 23px 16px;
        cursor: pointer;
        font-family: Inter;
        border-radius: 12px;
        font-weight: 500;
        transition: background 0.2s linear;
        &:hover {
          background-color: var(--background);
        }
      }
      .register-btn {
        height: 100%;
        background-color: var(--primary);
        padding: 23px 0;
        width: 150px;
        font-size: 16px;
        border: 0;
        font-family: Inter;
        border-radius: 12px;
        font-weight: 500;
        transition: background 0.2s linear;
        color: black;
        cursor: pointer;
        &:hover {
          background-color: #9ce205;
        }
      }
    }
  }
`;

export const HomeStyling = styled.div`
  .popular-tags-wrapper {
    grid-column: 3;
    width: 100%;
    height: fit-content;
    border: 1px solid var(--border);
    background-color: var(--background);
    border-radius: 12px;
    padding: 23px;
    margin-top: 124px;
    .popular-tags-title {
      font-size: 21px;
      color: white;
      font-weight: 500;
      margin-bottom: 18px;
    }
    .tag {
      color: var(--second-text-color);
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  .posts-wrapper {
    margin-top: 25px;
    grid-column: 2;
    .filter {
      padding: 10px;
      background-color: var(--background);
      border-radius: 12px;
      width: fit-content;
      display: flex;
      gap: 15px;
      .active {
        border: 1px solid var(--border);
        background-color: black;
      }
      button {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 500;
        color: var(--second-text-color);
        background: none;
        border: none;
        cursor: pointer;
        padding: 16px 24px;
        border-radius: 12px;
      }
    }
  }
`;

export const FooterStyling = styled.div`
  margin-top: auto;
  margin-bottom: 25px;
  .rights {
    margin-top: 100px;
    text-align: center;
    font-size: 14px;
    color: var(--second-text-color);
  }
`;

export const CreateArticleStyling = styled.div`
  margin-top: 25px;
  .creating-wrapper {
    background-color: white;
    padding: 16px 23px;
    border-radius: 12px;
    grid-column: 1/4;
    .image-wrapper {
      img {
        object-fit: cover;
      }
    }
    .file {
      margin-top: 16px;
      padding: 23px 16px;
      width: fit-content;
      border-radius: 12px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.6);
    }
    .form {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .send-button {
        background-color: var(--primary);
        padding: 23px 0;
        width: 200px;
        font-size: 16px;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: "Inter", sans-serif;
        border-radius: 12px;
        font-weight: 500;
        transition: background 0.2s linear;
        color: black;
        cursor: pointer;
        &:hover {
          background-color: #9ce205;
        }
      }
      .inputs-wrapper {
        margin-bottom: 16px;
        input {
          font-family: "Inter", sans-serif;

          margin-top: 16px;
          padding: 23px 16px;
          width: 100%;
          border-radius: 12px;
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
  }
`;

export const AuthStyling = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: white;
    margin-top: 150px;
    font-weight: 600;
    font-size: 35px;
    font-family: "Inter";
  }
  .input-wrapper {
    margin-top: 45px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    input:-webkit-autofill {
      -webkit-text-fill-color: yellow !important;
    }
    input {
      width: 100%;
      margin-bottom: 25px;
      background-color: var(--background);
      color: var(--second-text-color);
      font-size: 16px;
      padding: 23px 16px;
      font-family: Inter;
      border-radius: 12px;
      border: 1px solid var(--border);
      font-weight: 400;
      transition: color 0.2s linear;
      outline: none;
      &:focus {
        color: #ffffff;
        border: 1px solid var(--primary);
      }
      &:hover {
        color: #ffffff;
      }
    }
  }
  .error {
    margin: 0 0 25px 0;
    font-size: 14px;
  }
  button {
    background-color: var(--primary);
    padding: 23px 0;
    width: 200px;
    font-size: 16px;
    border: 0;
    font-family: Inter;
    border-radius: 12px;
    font-weight: 500;
    transition: background 0.2s linear;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #9ce205;
    }
  }
`;

export const PostPageStyling = styled.div`
  margin-top: 50px;
  .post-wrapper {
    background-color: var(--background);
    border: 1px solid var(--border);
    padding: 23px;
    grid-column: 2;
    border-radius: 12px;
  }
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
      color: white;
      li {
        font-family: "Inter", sans-serif;
        line-height: 30px;
        font-size: 18px;
      }
    }
    p {
      font-family: "Inter", sans-serif;
      margin: 24px 0 0 0;
      line-height: 30px;
      font-size: 18px;
      color: white;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 48px 0 0 0;
      font-size: 18px;
      font-weight: 600;
      color: white;
      line-height: 125%;
    }
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 36px;
    }
    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 18px;
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
      color: white;
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
            cursor: pointer;
            margin-left: 10px !important;
          }
        }
      }
      .post-time {
        font-size: 14px;
        color: var(--second-text-color);
        margin-top: 4px;
      }
    }
  }
  .post-title {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 36px;
    margin-top: 16px;
    color: white;
  }
  .tags {
    display: flex;
    margin-top: 16px;
    .tag {
      font-weight: 400;
      margin-right: 10px;
      font-size: 16px;
      color: var(--second-text-color);
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
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-top: 25px;
  padding: 18px 25px;
  height: 280px;
  position: relative;
  cursor: pointer;
  .post-wrapper {
    width: 70%;
    .post-image {
      height: 120px;
      width: 120px;
      background-color: var(--border);
      border-radius: 12px;
      position: absolute;
      right: 23px;
      top: 75px;
    }
    .lack-of-image {
      height: 120px;
      width: 120px;
      background-color: var(--border);
      border-radius: 12px;
      position: absolute;
      right: 23px;
      top: 75px;
      span {
        img {
          opacity: 0.3;
        }
        top: calc(50% - 22.5px);
        left: calc(50% - 22.5px);
      }
    }
    .top {
      display: flex;
      align-items: center;
      gap: 25px;
      .author {
        font-size: 16px;
        color: var(--second-text-color);
      }
      .shows-count {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--second-text-color);
        font-size: 14px;
      }
    }
    .post-title {
      margin-top: 25px;
      font-size: 28px;
      color: white;
      font-weight: 600;
    }
    .tags-wrapper {
      display: flex;
      gap: 10px;
      font-size: 16px;
      position: absolute;
      color: var(--second-text-color);
      bottom: 18px;
    }
  }
`;
