import {AuthForm} from "../../types/authForm";
import {User} from "../../types/user";
import {PERMISSION} from "../../module/auth/permissionList";
import {SUMMARY, WORKEXPERIENCE} from "../../constants";
import avatar from "../../assets/avatar.png";
import LocalStorageDB, {SERVER_USER_INFO} from "../../infra/localStorageDB";

export const UserInfo: Omit<User, "token"> = {
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
const loaded = LocalStorageDB.load(SERVER_USER_INFO);
const persist = () => LocalStorageDB.save(SERVER_USER_INFO, {...UserInfo, ...loaded});

try {
    persist();
} catch (error) {
    console.log("Load user data error", error);
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

    static async getUserInfo(): Promise<User> {
        const userInfo = LocalStorageDB.load(SERVER_USER_INFO) as User;
        return userInfo;
    }
}
