import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import styled, { keyframes } from "styled-components";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, authInfo } = useAuth();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const isRegistered = checkIfUserIsRegistered(username, password, authInfo);
    console.log("Is Registered:", isRegistered);
    if (isRegistered) {
      login(username, password);
      console.log("Logging in with", { username, password });
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const checkIfUserIsRegistered = (
    username,
    password,
    authInfo,
    registeredUsers
  ) => {
    if (authInfo) {
      return authInfo.username === username && authInfo.password === password;
    }

    if (registeredUsers && registeredUsers.length > 0) {
      return registeredUsers.some(
        (user) => user.username === username && user.password === password
      );
    }

    return false;
  };

  return (
    <Container>
      <Heading>리액트 훅 폼</Heading>
      <Text>
        사용하기 쉬운 검증 기능을 갖춘 유연하고 확장 가능한 고성능 양식입니다.
      </Text>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3em;
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: #121e52;
`;

const Heading = styled.h2`
  textalign: center;
  color: white;
`;

const Text = styled.p`
  color: pink;
  textalign: center;
  margintop: 10px;
`;
