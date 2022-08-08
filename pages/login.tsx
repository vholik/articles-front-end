import { useState } from "react";
import { useGetUserMutation } from "./redux/authApi";
import { addToken } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import Router from "next/router";
import Link from "next/link";
import { LoginStyling } from "./style/style";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState<boolean>(false);

  const [getUser] = useGetUserMutation();

  const loginSuccess = (payload: string) => {
    dispatch(addToken(payload));
    setIsError(false);
    Router.push("/");
  };

  const handleGetUser = async (e) => {
    e.preventDefault();
    await getUser(formData)
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
    </LoginStyling>
  );
};

export default LoginPage;
