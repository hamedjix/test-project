import { createContext, ReactNode, useContext, useState } from "react";
import { tokenName } from "../api/axios";

interface IAuthContext {
  isLoggedIn: boolean;
  setUserStatus: (flag: boolean) => void;
}
const initialState = {
  isLoggedIn: false,
  setUserStatus: () => {},
};
const AuthContext = createContext<IAuthContext>(initialState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialAuthState = Boolean(localStorage.getItem(tokenName));
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialAuthState);
  const setUserStatus: (flag: boolean) => void = (flag) => {
    setIsLoggedIn(flag);
  };
  return <AuthContext.Provider value={{ setUserStatus, isLoggedIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthContext.displayName = "Auth Context";
export default AuthProvider;
