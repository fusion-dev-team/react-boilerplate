import InitialStorage from 'storage-tool';

export default class Storage extends InitialStorage {
  static TOKEN_NAME = 'userToken';

  static REFRESH_TOKEN_NAME = 'userRefreshToken';

  static get token() {
    return this.getItem(this.TOKEN_NAME);
  }

  static set token(value) {
    this.setItem(this.TOKEN_NAME, value);
  }

  static get refreshToken() {
    return this.getItem(this.REFRESH_TOKEN_NAME);
  }

  static set refreshToken(value) {
    this.setItem(this.REFRESH_TOKEN_NAME, value);
  }
}
