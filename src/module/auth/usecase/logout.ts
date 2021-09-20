import LocalStorageDB, {ACCESS_TOKEN, USER_INFO} from "../../../infra/localStorageDB";

const Logout = async () => {
    LocalStorageDB.delete(USER_INFO);
    LocalStorageDB.delete(ACCESS_TOKEN);
};
export default Logout;
