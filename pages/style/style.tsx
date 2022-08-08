import styled from "styled-components";

export const HeaderStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .logo {
    font-size: 32px;
    font-weight: 600;
    color: var(--black);
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  p {
    cursor: pointer;
  }
  button {
    padding: 12px 50px;
    font-size: 14px;
    border-radius: 25px;
    background-color: var(--black);
    cursor: pointer;
    border: 0px;
    color: white;
    margin-left: 25px;
    transition: 0.2s linear background;
    :hover {
      background-color: #212121;
    }
  }
`;

export const LoginStyling = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
    margin-top: 16px;
    padding: 12px 50px;
    font-size: 14px;
    border-radius: 25px;
    background-color: var(--black);
    cursor: pointer;
    border: 0px;
    color: white;
    transition: 0.2s linear background;
    :hover {
      background-color: #212121;
    }
  }
  h1 {
    font-size: 41px;
    color: var(--black);
  }
`;

export const PostStyling = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 25px;
  margin-top: 25px;
  width: 800px;
  .user-header {
    display: flex;
    align-items: center;
    .user-icon {
      border-radius: 50%;
      height: 35px;
      width: 35px;
      background-color: lightgray;
    }
    .user-name {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .post-body {
    cursor: pointer;
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .post-image {
      background-color: #d2d2d2;
      height: 100px;
      width: 100px;
    }
    .post-title {
      font-size: 25px;
      font-weight: 700;
      margin-top: 16px;
    }
    .post-text {
      margin-right: 100px;
      margin-top: 16px;
      font-size: 16px;
      font-family: "Times New Roman", Times, serif;
    }
  }

  .post-bottom {
    margin-top: 25px;
    display: flex;
    align-items: center;
    .post-time {
      font-size: 14px;
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.6);
    }
    .tags-wrapper {
      display: flex;
      .post-tag {
        padding: 5px 15px;
        border-radius: 25px;
        background-color: #efefef;
        font-size: 14px;
        margin-right: 8px;
        color: #171717;
      }
    }
  }
`;
