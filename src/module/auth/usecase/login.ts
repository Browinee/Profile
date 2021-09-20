import {AuthForm} from "../../../types/authForm";
import http from "../../../infra/http";
import {User} from "../../../types/user";
import LocalStorageDB, {ACCESS_TOKEN, USER_INFO} from "../../../infra/localStorageDB";

export interface LoginResponseProps {
    userInfo: User;
    token: string;
}
const Login = (userInfo: AuthForm): Promise<User> => {
    return http.post("/login", userInfo).then(loginResponse => {
        const {userInfo, token} = loginResponse as unknown as LoginResponseProps;
        LocalStorageDB.save(USER_INFO, JSON.stringify(userInfo as unknown as User));
        LocalStorageDB.save(ACCESS_TOKEN, token);
        return userInfo;
    });
};
export default Login;
