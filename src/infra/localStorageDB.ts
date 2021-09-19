import {User} from "../types/user";

export const LOCAL_STORAGE_PREFIX = "__auth_provider_token__";

export const USER_INFO = `${LOCAL_STORAGE_PREFIX}_user_info`;
export const SERVER_USER_INFO = "__server_user_info__";
export default class LocalStorageDB {
    static save(key: string, value: string, expires = false) {
        window.localStorage.setItem(key, value);
    }

    static load(key: string): User {
        const data = window.localStorage.getItem(key) || "";
        return JSON.parse(data);
    }

    static delete(key: string) {
        return localStorage.removeItem(key);
    }
}
