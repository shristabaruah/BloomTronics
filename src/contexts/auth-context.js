import { createContext, useReducer, useEffect, useContext } from "react";
import { authReducer } from "../reducer/auth-reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: "",
    token: "",
  });
  const checkUser = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    authDispatch({ type: "CHECK_USER", payload: { user, token } });
  };

  useEffect(() => checkUser(), []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
