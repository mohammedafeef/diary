import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  SubmitButton,
  ErrorText,
  HelperText,
  LinkText,
} from "../../utils/styles/userGlobalStyle";
import TextInput from "../../utils/inputs/TextInput";
import { login } from "../../../service/authService";
import { storageKey } from "../../../const";
import loadingContext from "../../../context/loadingContext";
export default function Login() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const loginHandler = async () => {
    loaderToggler(true);
    try {
      const data = {
        email,
        password,
      };
      const user = await login(data);
      localStorage.setItem(storageKey.token, user.token);
      navigate("/app/home");
    } catch (err) {
      console.error(err.message);
      setIsError("Invalid email or password");
    }
    loaderToggler(false);
  };
  return (
    <>
      <Title variant="h4">Login</Title>
      <TextInput
        label="Email *"
        name="email"
        type="email"
        value={email}
        error={isError}
        valueSetter={setEmail}
      />
      <TextInput
        label="Password *"
        name="password"
        type="password"
        error={isError}
        value={password}
        valueSetter={setPassword}
      />
      {isError && <ErrorText color="error">{isError}</ErrorText>}
      <SubmitButton
        fullWidth
        variant="contained"
        disabled={!email || !password}
        onClick={loginHandler}
      >
        Login
      </SubmitButton>
      <HelperText>
        Don't have an account? <LinkText to="/user/register">Sign up</LinkText>
      </HelperText>
    </>
  );
}
