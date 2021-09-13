import { AuthForm } from "../../types/authForm";
import { User } from "../../types/user";

// const ADMIN_USER_INFO: User = {
//     // id: ;
//     // name: "Jstin";
//     // email: string;
//     // token: string;
//     // permission: string[];
//     // age: number;
//     // workExperience: Work[];
//     // avatar: string
// }
function validateUserForm({ username, password }: AuthForm) {
  if (username !== "admin" || password !== "admin") {
    throw new Error("Username or Password is wrong");
  }
}
export default class UserDB {
  static async authenticate({ username, password }: AuthForm) {
    validateUserForm({ username, password });
    return {
      test: 123,
    };
  }
}
