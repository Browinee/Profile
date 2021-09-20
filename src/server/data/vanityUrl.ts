import LocalStorageDB, {SERVER_USER_INFO, SERVER_VANITY_INFO} from "../../infra/localStorageDB";
import {UserInfo} from "./user";

const persist = () => LocalStorageDB.save(SERVER_VANITY_INFO, []);

try {
    persist();
} catch (error) {}

export interface VanityUrlProps {
    url: string;
    permission: string[];
}
export default class VanityUrlDB {
    static async vanityUrlInfo() {
        // const vanityInfo = LocalStorageDB.load(SERVER_VANITY_INFO);
    }
}
