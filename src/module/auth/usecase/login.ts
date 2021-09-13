import { AuthForm } from "../../../types/authForm";
import http from "../../../infra/http";
import { User } from "../../../types/user";

const LoginService = (userInfo: AuthForm): Promise<User> => {
  return http.post("/login", userInfo);
};
export default LoginService;
