import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const styles = {
  container: {
    maxWidth: "300px",
    margin: "auto",
    // padding: "100px",
    // border: "1px solid #ddd",
    // borderRadius: "8px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    // backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  button: {
    width: "100%",
    padding: "17px",
    backgroundColor: "gray",
    color: "#fff",
    borderRadius: "3px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  infoText: {
    marginTop: "10px",
  },
};

const LoginInfo = ({ authInfo }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { register } = useAuth();

  const handleButtonClick = () => {
    setShowInfo(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>로그인 정보</h2>
      <button onClick={handleButtonClick} style={styles.button}>
        가져오기
      </button>
      {showInfo && (
        <p style={styles.infoText}>
          {`${authInfo?.username}의 비밀번호는 ${authInfo?.password}입니다`}
        </p>
      )}
    </div>
  );
};

export default LoginInfo;
