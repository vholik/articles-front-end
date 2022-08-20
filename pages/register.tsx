import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSendUserMutation } from "../redux/authApi";
import { addToken } from "../redux/userSlice";
import { AuthStyling } from "../style/style";
import { IUser } from "../types";
import Head from "next/head";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [sendUser] = useSendUserMutation();

  const loginSuccess = (payload: IUser) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        isLogged: true,
        token: payload.token,
        me: payload,
      })
    );
    dispatch(addToken(payload));
    setIsError(false);
    window.location.replace("/");
  };

  const handleSendUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendUser(formData)
      .unwrap()
      .then((payload) => {
        setIsError(false);
        loginSuccess(payload);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };
  return (
    <AuthStyling>
      <Head>
        <title>Register - Articleholik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Explore new articles with us</h1>
      <form onSubmit={handleSendUser} className="input-wrapper">
        <input
          type="email"
          name=""
          id=""
          placeholder="Type your e-mail"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Create a password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Type your full name"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <button>Register</button>
        {isError && <p style={{ color: "red" }}>Can not register</p>}
      </form>
    </AuthStyling>
  );
}
