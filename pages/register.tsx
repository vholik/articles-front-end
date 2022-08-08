import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSendUserMutation } from "./redux/authApi";
import { addToken } from "./redux/userSlice";
import Router from "next/router";
import { LoginStyling } from "./style/style";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [sendUser] = useSendUserMutation();

  const loginSuccess = (payload: string) => {
    dispatch(addToken(payload));
    setIsError(false);
    Router.push("/");
  };

  const handleSendUser = async (e) => {
    e.preventDefault();
    await sendUser(formData)
      .unwrap()
      .then((payload) => {
        setIsError(false);
        loginSuccess(payload.token);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });

    // setFormData({
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <LoginStyling>
      <h1>Explore new articles with us</h1>
      <form onSubmit={handleSendUser} className="input-wrapper">
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="full name"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <button>Register</button>
        {isError && <p style={{ color: "red" }}>Can't register</p>}
      </form>
    </LoginStyling>
  );
}
