import {AuthForm} from "../../types/authForm";
import {User} from "../../types/user";
import {PERMISSION} from "../../module/auth/permissionList";
import {SUMMARY, WORKEXPERIENCE} from "../../constants";
import avatar from "../../assets/avatar.png";
import LocalStorageDB, {SERVER_USER_INFO} from "../../infra/localStorageDB";

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
const persist = () => LocalStorageDB.save(SERVER_USER_INFO, UserInfo);
const load = () => Object.assign(UserInfo, LocalStorageDB.load(SERVER_USER_INFO));

try {
    load();
} catch (error) {
    persist();
}

function validateUserForm({username, password}: AuthForm) {
    if (username !== "admin" || password !== "admin") {
        throw new Error("Username or Password is wrong");
    }
}

export default class UserDB {
    static async authenticate({username, password}: AuthForm): Promise<{userInfo: User; token: string} | null> {
        validateUserForm({username, password});

        const userInfo = LocalStorageDB.load(SERVER_USER_INFO) as User;
        return {userInfo, token: btoa(userInfo.id)};
    }

    static async save(userInfo: User): Promise<User> {
        LocalStorageDB.save(SERVER_USER_INFO, JSON.stringify(userInfo));
        return userInfo;
    }
}
