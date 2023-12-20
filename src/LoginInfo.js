import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import styled, { keyframes } from "styled-components";
// BrowserRouter가 있어서 쓸 수 있음
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const LoginInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { authInfo } = useAuth();

  const handleButtonClick = () => {
    setShowInfo(true);
  };

  return (
    <>
      <Router>
        <Container>
          <SideMenu>
            <MenuLink>Home</MenuLink>
            <MenuLink>About</MenuLink>
            <MenuLink>Join</MenuLink>
            <MenuLink>Contact</MenuLink>
          </SideMenu>
          {/* <Content>
            <Switch>
              <Route path="/" exact component={LoginForm} />
              <Route path="/another" component={AnotherComponent} />
              <Route path="/yet-another" component={YetAnotherComponent} />
            </Switch>
          </Content> */}
        </Container>
      </Router>
    </>
  );
};

export default LoginInfo;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SideMenu = styled.nav`
  width: 20%;
  background-color: white;
  padding: 20px;
  border-right: 1px solid gray;
  color: black;
`;

const MenuLink = styled(Link)`
  display: block;
  color: black;
  padding: 10px;
  margin: 10px 0;
  text-decoration: none;
`;
