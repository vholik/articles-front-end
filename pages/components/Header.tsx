import { NextPage } from "next";
import { HeaderStyling } from "../style/style";
import Link from "next/link";
import { logOut } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.svg";
import Search from "../images/Search.svg";
import Write from "../images/write.svg";
import Account from "../images/account.svg";
import Logout from "../images/Logout.svg";
import { useGetPostsQuery } from "../redux/postsApi";
import { post } from "../types";

export const Header: NextPage = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState({
    isLogged: false,
    token: "",
    me: {},
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user")!);
    if (saved?.isLogged) {
      setUser(saved);
    }
  }, [dispatch]);

  const logOutHandler = () => {
    localStorage.removeItem("user");
    setUser({
      isLogged: false,
      token: "",
      me: {},
    });
    dispatch(logOut());
    Router.push("/");
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <HeaderStyling>
      <div className="container">
        <Link href="/">
          <div className="logo">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="middle">
          <div className="input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={searchHandler}
            />
            <Image src={Search} alt="Search" />
            <div className="search-result">
              {data
                .filter((post: post) =>
                  post.title.toLowerCase().includes(searchValue)
                )
                .map((post: post, key: number) => (
                  <div key={post._id}>
                    <Link href={`/posts/${post._id}`}>
                      <div className="searched-post">
                        {key + 1}. {post.title}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <Link href="/createarticle">
            <button className="write-btn">
              <Image src={Write} alt="Write" />
              Write an article
            </button>
          </Link>
        </div>

        {user.isLogged ? (
          <div className="right">
            <div className="right__inner">
              <button className="login-btn" onClick={logOutHandler}>
                <Image src={Logout} alt="Log in" />
                Log out
              </button>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="right__inner">
              <Link href="/login">
                <button className="login-btn">
                  <Image src={Account} alt="Log in" />
                  Log in
                </button>
              </Link>
              <Link href="/register">
                <button className="register-btn">Register</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </HeaderStyling>
  );
};
