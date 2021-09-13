export default class Storage {
  static save<T>(key: string, value: T, expires = false) {
    window.localStorage.localStorage.setItem(key, value);
  }

  static load<T>(key: string) {
    return window.localStorage.getItem(key);
  }

  static delete(key: string) {
    return localStorage.removeItem(key);
  }
}
