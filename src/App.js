import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//react-router-dom은 React 애플리케이션에서 클라이언트 측 라우팅을 구현하기 위한 라이브러리로,
// URL에 따라 다른 컴포넌트를 렌더링하고 전체 페이지 새로고침 없이 뷰를 업데이트할 수 있게 하는
// 기능을 제공
import logo from "./logo.svg";
import { useAuth } from "./AuthContext";
import "./App.css";
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";
import Join from "./Join";
import Contact from "./Contact";
import styled, { keyframes } from "styled-components";

function App() {
  const { login, authInfo, register } = useAuth();
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    //Router 컴포넌트는 애플리케이션 콘텐츠를 감싸며, react-router-dom에서 제공하는
    //<Link>, <Route> 및 기타 컴포넌트를 사용하여 클라이언트 측 라우팅을 가능하게 함
    <Router>
      <AppContainer>
        <Header>
          <AppLogo src={logo} alt="Logo" />
          <Menu>
            {/* <Link>를 클릭하면 URL이 업데이트되고 해당하는 <Route> 컴포넌트가 
            전체 페이지 새로고침 없이 렌더링 됨 */}
            <Link to="/" onClick={() => setActiveMenu("home")}>
              소개
            </Link>
            <Link to="/about" onClick={() => setActiveMenu("about")}>
              UI/UX
            </Link>
            <Link to="/join" onClick={() => setActiveMenu("join")}>
              온갖 기능
            </Link>
            <Link to="/contact" onClick={() => setActiveMenu("contact")}>
              관리자test
            </Link>
          </Menu>
        </Header>
        {/* <Content> */}
        <Switch>
          <Route path="/about">
            <LoginInfo />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
        {/* </Content> */}
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  height: 70px;
  background-color: #121e52;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Menu = styled.nav`
  a {
    color: #d5d5d7;
    text-decoration: none;
    margin: 0 20px;
    font-weight: 600;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3em;
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: #fafafa;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 5vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;
