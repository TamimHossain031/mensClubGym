import { useState } from "react";
import { login } from "../../Context";

const Login = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const addV = (user) => {
    localStorage.setItem("role", user);

    setIsLogin(!isLogin);
  };

  return (
    <>
      <login.Provider value={{ isLogin, addV }}> {children}</login.Provider>
    </>
  );
};

export default Login;
