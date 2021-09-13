export const LOCAL_STORAGE_PREFIX = "__auth_provider_token__";

export const USER_INFO = `${LOCAL_STORAGE_PREFIX}_USER_INFO`;
export default class Storage {
  static save<T>(key: string, value: T, expires = false) {
    window.localStorage.localStorage.setItem(key, value);
  }

  static load(key: string) {
    return window.localStorage.getItem(key);
  }

  static delete(key: string) {
    return localStorage.removeItem(key);
  }
}
