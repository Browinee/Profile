import React, { ReactNode, useContext } from "react";
import { User } from "../../../types/user";
import { AuthForm } from "../../../types/authForm";
import Loading from "../../../components/Loading";
import FullPageErrorFallback from "../../../components/FullPageErrorFallback";
import useAsync from "../../../hooks/useAsync";
import Login from "../usecase/login";
import Logout from "../usecase/logout";

interface AuthContextProps {
  user: User | null;
  login: (form: AuthForm) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();
  const loginHandler = (form: AuthForm) => run(Login(form));
  const logoutHandler = () => Logout().then(() => setUser(null));

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }
  return (
    <AuthContext.Provider
      value={{ user, login: loginHandler, logout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context must be under AuthProvider");
  }
  return context;
};
