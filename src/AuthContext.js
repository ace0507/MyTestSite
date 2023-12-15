import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const login = (username, password) => {
    setAuthInfo({ username, password });
  };

  // const register = (username, password) => {
  //   const isUsernameTaken = registeredUsers.some(
  //     (user) => user.username === username
  //   );
  //   if (!isUsernameTaken) {
  //     // If the username is not taken, add the new user
  //     setRegisteredUsers([...registeredUsers, { username, password }]);
  //     setAuthInfo({ username, password });
  //   } else {
  //     // If the username is taken, handle accordingly (e.g., show an error message)
  //     console.error("Username is already taken");
  //   }
  //   // setAuthInfo({ username, password });
  // };

  const register = (username, password) => {
    const isUsernameTaken = registeredUsers.some(
      (user) => user.username === username
    );
    if (!isUsernameTaken) {
      const newUser = { username, password };
      setRegisteredUsers([...registeredUsers, newUser]);
      //새로운 유저 등록
      setAuthInfo(newUser);
    } else {
      console.error("Username is already taken");
    }
  };

  const logout = () => {
    setAuthInfo(null);
  };
  const value = { authInfo, login, register, logout };
  return (
    // Provider에 authInfo, login, logout 상태를 저장했다.
    <AuthContext.Provider value={value}>
      {/* 그리고는 children으로  뿌려주었다.  */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
