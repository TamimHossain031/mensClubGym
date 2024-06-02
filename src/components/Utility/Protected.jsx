import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../Context";

export default function Protected({ children }) {
  const { isLogin } = useContext(login);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
