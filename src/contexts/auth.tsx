import { createContext, ReactNode, useContext, useState } from "react";
import { LocalStoragChecker } from "../helper";

interface IAuthContext {
  user: string;
  isLoggedIn: boolean;
  setUserStatus: (flag: boolean, name?: string) => void;
}
const initialState = {
  user: "",
  isLoggedIn: false,
  setUserStatus: () => {},
};
const AuthContext = createContext<IAuthContext>(initialState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialAuthState = LocalStoragChecker();
  const [user, setUser] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialAuthState);
  const setUserStatus: (flag: boolean, name?: string) => void = (flag, name = "") => {
    setUser(name);
    setIsLoggedIn(flag);
  };
  return <AuthContext.Provider value={{ user, setUserStatus, isLoggedIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthContext.displayName = "Auth Context";
export default AuthProvider;
