import { useState } from "react";
import { useGetUserMutation } from "../redux/authApi";
import { addToken } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { AuthStyling } from "./style/style";
import { IUser } from "./types";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState<boolean>(false);

  const [getUser] = useGetUserMutation();

  const loginSuccess = (payload: IUser) => {
    console.log(payload);
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
    // Router.push("/");
    window.location.replace("/");
  };

  const handleGetUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await getUser(formData)
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
        <title>Login - Articleholik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Login to your account</h1>
      <form className="input-wrapper" onSubmit={handleGetUser}>
        <input
          placeholder="Email"
          value={formData.email}
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          required
          placeholder="Password"
          value={formData.password}
          type="password"
          name=""
          id=""
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {isError && (
          <p className="error" style={{ color: "red" }}>
            Email or password is incorrect
          </p>
        )}
        <button type="submit">Login</button>
      </form>
    </AuthStyling>
  );
};

export default LoginPage;
