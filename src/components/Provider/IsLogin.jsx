import { useState } from "react";
import { login } from "../../Context";

const Login = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  isLogin
    ? localStorage.setItem("role", "admin")
    : localStorage.removeItem("role");
  return (
    <>
      <login.Provider value={{ isLogin, setIsLogin }}>
        {" "}
        {children}
      </login.Provider>
    </>
  );
};

export default Login;