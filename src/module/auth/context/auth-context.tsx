import React, {ReactNode, useCallback, useContext} from "react";
import {User} from "../../../types/user";
import {AuthForm} from "../../../types/authForm";
import useAsync from "../../../hooks/useAsync";
import Login from "../usecase/login";
import Logout from "../usecase/logout";
import LocalStorageDB, {ACCESS_TOKEN, USER_INFO} from "../../../infra/localStorageDB";
import useMount from "../../../hooks/useMount";
import UpdateUserInfo from "../usecase/updateUserInfo";
import Loading from "../../../components/Loading";
import http from "../../../infra/http";

interface AuthContextProps {
    user: User | null;
    login: (form: AuthForm) => void;
    logout: () => void;
    errorMsg: string;
    isLoading: boolean;
    updateUser: (user: User) => void;
    syncUser: () => void;
    resetError: () => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = "AuthContext";

const bootstrapUser = async () => {
    const token = LocalStorageDB.load(ACCESS_TOKEN);
    if (token) {
        return http.get("/me") as Promise<User>;
    }
    const isShared = document.location.href.includes("/shared");
    if (isShared) {
        return http.get("/open-me") as Promise<User>;
    }
    return null;
};

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const {data: user, error, isLoading, run, setData: setUser, resetError} = useAsync<User | null>();
    const loginHandler = (form: AuthForm) => run(Login(form));
    const logoutHandler = () => Logout().then(() => setUser(null));
    const updateUser = (userInfo: User) => {
        if (!navigator.onLine) {
            LocalStorageDB.save(USER_INFO, userInfo);
            setUser(userInfo);
        } else {
            return run(UpdateUserInfo(userInfo));
        }
    };
    const syncUser = () => {
        const userInfo = LocalStorageDB.load(USER_INFO);
        if (userInfo === null) return;
        return run(UpdateUserInfo(userInfo));
    };
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
                syncUser,
                resetError,
            }}
        >
            {children}
            {isLoading && <Loading />}
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
