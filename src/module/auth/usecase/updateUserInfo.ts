import http from "../../../infra/http";
import {User} from "../../../types/user";
import LocalStorageDB, {USER_INFO} from "../../../infra/localStorageDB";

const UpdateUserInfoService = (userInfo: User): Promise<User> => {
    return http.put("/updateUser", userInfo).then(userInfo => {
        LocalStorageDB.save(USER_INFO, JSON.stringify(userInfo as unknown as User));
        return userInfo as unknown as User;
    });
};
export default UpdateUserInfoService;
