export const LOCAL_STORAGE_PREFIX = "__auth_provider_token__";

export const USER_INFO = `${LOCAL_STORAGE_PREFIX}_USER_INFO`;
export default class LocalStorageDB {
  static save(key: string, value: string, expires = false) {
    window.localStorage.setItem(key, value);
  }

  static load(key: string) {
    try {
      const data = window.localStorage.getItem(key) || "";
      return JSON.parse(data);
    } catch (e) {
      return "";
    }
  }

  static delete(key: string) {
    return localStorage.removeItem(key);
  }
}
