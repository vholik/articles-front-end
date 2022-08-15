import { NextPage } from "next";
import { HeaderStyling } from "../style/style";
import Link from "next/link";
import { logOut } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { useEffect, useState } from "react";
import WriteIcon from "../images/Write.png";
import Image from "next/image";

export const Header: NextPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    isLogged: false,
    token: null,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user")!);
    if (saved?.isLogged) {
      setUser(saved);
    }
  }, [dispatch]);

  console.log(user);

  const logOutHandler = () => {
    localStorage.removeItem("user");
    setUser({
      isLogged: false,
      token: null,
    });
    dispatch(logOut());
    Router.push("/");
  };
  return (
    <HeaderStyling>
      <Link href="/">
        <div className="logo">SPLASH</div>
      </Link>
      {user.isLogged ? (
        <div className="right">
          <p onClick={logOutHandler}>Log out</p>

          <Link href="/createarticle">
            <button>
              <Image src={WriteIcon} height={35} width={35} />
              Create an article
            </button>
          </Link>
        </div>
      ) : (
        <div className="right">
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </HeaderStyling>
  );
};
