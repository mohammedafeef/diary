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
import { register } from "../../../service/authService";
import loadingContext from "../../../context/loadingContext";
export default function Register() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const loginHandler = async () => {
    if (password.length < 4) return setIsError("Password must be 4 letter ");
    loaderToggler(true);
    try {
      const data = {
        username,
        email,
        password,
      };
      await register(data);
      navigate("/user/login");
    } catch (err) {
      console.error(err.message);
      setIsError("username or email already exists");
    }
    loaderToggler(false);
  };
  return (
    <>
      <Title variant="h4">Sign Up</Title>
      <TextInput
        label="Username *"
        name="username"
        type="text"
        value={username}
        error={isError}
        valueSetter={setUsername}
      />
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
        disabled={!email || !password || !username}
        onClick={loginHandler}
      >
        Register
      </SubmitButton>
      <HelperText>
        Already have an account? <LinkText to="/user/login">Login</LinkText>
      </HelperText>
    </>
  );
}
