import { AuthForm } from "../../types/authForm";
import { User } from "../../types/user";
import LocalStorageDB, { USER_INFO } from "../../infra/localStorageDB";
import { PERMISSION } from "../../module/auth/constants";
import { SUMMARY, WORKEXPERIENCE } from "../../constants";
import avatar from "./avatar.png";
let UserInfo: Omit<User, "token"> = {
  id: "1",
  name: "Justin",
  email: "Nihilitypeo@gmail.com",
  permission: PERMISSION,
  age: 30,
  workExperience: WORKEXPERIENCE,
  avatar: avatar,
  github: "https://github.com/Browinee/",
  summary: SUMMARY,
};
const persist = () => LocalStorageDB.save(USER_INFO, JSON.stringify(UserInfo));
const load = () => Object.assign(UserInfo, LocalStorageDB.load(USER_INFO));

// initialize
try {
  load();
} catch (error) {
  persist();
  // ignore json parse error
}

function validateUserForm({ username, password }: AuthForm) {
  if (username !== "admin" || password !== "admin") {
    throw new Error("Username or Password is wrong");
  }
}

export default class UserDB {
  static async authenticate({ username, password }: AuthForm): Promise<User> {
    validateUserForm({ username, password });
    return { ...UserInfo, token: btoa(UserInfo.id) };
  }
}
