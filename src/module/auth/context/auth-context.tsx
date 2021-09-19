import React, {ReactNode, useCallback, useContext} from "react";
import {User} from "../../../types/user";
import {AuthForm} from "../../../types/authForm";
import useAsync from "../../../hooks/useAsync";
import Login from "../usecase/login";
import Logout from "../usecase/logout";
import LocalStorageDB, {ACCESS_TOKEN, USER_INFO} from "../../../infra/localStorageDB";
import useMount from "../../../hooks/useMount";

interface AuthContextProps {
    user: User | null;
    login: (form: AuthForm) => void;
    logout: () => void;
    errorMsg: string;
    isLoading: boolean;
    updateUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = "AuthContext";

const bootstrapUser = async () => {
    const token = LocalStorageDB.load(ACCESS_TOKEN);
    const user = LocalStorageDB.load(USER_INFO);
    return token ? user : null;
};

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const {data: user, error, isLoading, run, setData: setUser, updateData: updateUser} = useAsync<User | null>();
    const loginHandler = (form: AuthForm) => run(Login(form));
    const logoutHandler = () => Logout().then(() => setUser(null));

    useMount(
        useCallback(() => {
            run(bootstrapUser());
        }, [])
    );
    return (
        <AuthContext.Provider
            value={{
                user,
                login: loginHandler,
                logout: logoutHandler,
                errorMsg: error?.message || "",
                isLoading,
                updateUser,
            }}
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
