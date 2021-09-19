import {User} from "../types/user";

export const USER_INFO = "__user_info__";
export const ACCESS_TOKEN = "__access_token__";
export const SERVER_USER_INFO = "__server_user_info__";

export default class LocalStorageDB {
    static save(key: string, value: string, expires = false) {
        window.localStorage.setItem(key, value);
    }

    static load(key: string): User | null {
        try {
            const data = window.localStorage.getItem(key) || "";
            return key === ACCESS_TOKEN ? data : JSON.parse(data);
        } catch (e) {
            return null;
        }
    }

    static delete(key: string) {
        return localStorage.removeItem(key);
    }
}
