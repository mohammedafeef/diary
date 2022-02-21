import React, { useState } from "react";
import {
  Title,
  SubmitButton,
  ErrorText,
  HelperText,
  LinkText,
} from "../../utils/styles/userGlobalStyle";
import TextInput from "../../utils/inputs/TextInput";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const loginHandler = () => {
    console.log(email, password);
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
