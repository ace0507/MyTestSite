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

function App() {
  const { login, authInfo, register } = useAuth();
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    //Router 컴포넌트는 애플리케이션 콘텐츠를 감싸며, react-router-dom에서 제공하는
    //<Link>, <Route> 및 기타 컴포넌트를 사용하여 클라이언트 측 라우팅을 가능하게 함
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">My Logo</div>
          <nav className="menu">
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
              관리자
            </Link>
          </nav>
        </header>
        <div className="content">
          <Switch>
            <Route path="/about">
              <LoginInfo authInfo={authInfo} />
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
        </div>
      </div>
    </Router>
  );
}

export default App;
