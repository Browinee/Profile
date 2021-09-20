import {User} from "../types/user";

export const USER_INFO = "__user_info__";
export const ACCESS_TOKEN = "__access_token__";
export const SERVER_USER_INFO = "__server_user_info__";

export default class LocalStorageDB {
    static save(key: string, value: any) {
        const transformedValue = typeof value === "string" ? value : JSON.stringify(value);
        window.localStorage.setItem(key, transformedValue);
    }

    static load(key: string): User | null {
        const data = window.localStorage.getItem(key);
        if (data == null) return null;
        return key === ACCESS_TOKEN ? data : JSON.parse(data);
    }

    static delete(key: string) {
        return localStorage.removeItem(key);
    }
}
