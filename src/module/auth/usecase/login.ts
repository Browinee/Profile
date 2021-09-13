import { AuthForm } from "../../../types/authForm";
import http from "../../../infra/http";
import { User } from "../../../types/user";
import LocalStorageDB, { USER_INFO } from "../../../infra/localStorageDB";

const LoginService = (userInfo: AuthForm): Promise<User> => {
  return http.post("/login", userInfo).then((user) => {
    console.log("user", user);
    LocalStorageDB.save(USER_INFO, JSON.stringify(user as unknown as User));
    return user as unknown as User;
  });
};
export default LoginService;
