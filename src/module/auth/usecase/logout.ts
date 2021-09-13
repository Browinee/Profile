import LocalStorageDB, { USER_INFO } from "../../../infra/localStorageDB";

const Logout = async () => {
  LocalStorageDB.delete(USER_INFO);
};
export default Logout;
