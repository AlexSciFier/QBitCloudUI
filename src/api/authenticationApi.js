import { get, postURLEncoded } from "./baseApi";

export default class Authentication {
  static #endpoint = "/api/v2/auth";
  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns
   */
  static login = async (username, password) => {
    let res = await postURLEncoded(this.#endpoint + "/login", { username, password });
    if (res !== undefined) return { ok: true, message: "" };
    return { ok: false, message: res };
  };

  static logout = async () => {
    return await get(this.#endpoint + "/logout");
  };
}
