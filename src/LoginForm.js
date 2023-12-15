import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const styles = {
  container: {
    maxWidth: "300px",
    margin: "auto",
    // padding: "30px",
    // border: "1px solid #ddd",
    borderRadius: "8px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    // backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  label: {
    display: "block",
    margin: "10px 0",
  },
  input: {
    width: "100%",
    padding: "15px",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "17px",
    backgroundColor: "gray",
    color: "#fff",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "10px",
  },
  success: {
    color: "green",
    textAlign: "center",
    marginTop: "10px",
  },
};

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
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Form</h2>
      <form onSubmit={handleLogin}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Log in
        </button>
        {/* {loginError && <p style={styles.error}>로그인실패</p>} */}
        {loginError ? (
          <p style={styles.error}>로그인실패</p>
        ) : (
          <p style={styles.success}>로그인성공</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
