import { NextPage } from "next";
import { HeaderStyling } from "../style/style";
import Link from "next/link";
import { useAppSelector } from "../redux/hook";

export const Header: NextPage = () => {
  const { user } = useAppSelector((store) => store);
  console.log(user);
  return (
    <HeaderStyling>
      <Link href="/">
        <div className="logo">MEDUZA</div>
      </Link>
      {user.isLogged ? (
        <div>Logged</div>
      ) : (
        <div className="right">
          <Link href="login">
            <p>Login</p>
          </Link>
          <Link href="register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </HeaderStyling>
  );
};
