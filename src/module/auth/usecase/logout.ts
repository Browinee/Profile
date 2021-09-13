import Storage, { USER_INFO } from "../../../infra/storage";

const Logout = async () => {
  Storage.delete(USER_INFO);
};
export default Logout;
