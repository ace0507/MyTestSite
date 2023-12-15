import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const Join = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password);
  };

  return (
    <div>
      <h2>Membership Registration</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Join;
