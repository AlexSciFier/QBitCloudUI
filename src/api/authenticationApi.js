import { get } from "./baseApi";

export default class Authentication {
  static #endpoint = "/api/v2/auth";
  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns
   */
  static login = async (username, password) => {
    let res = await get(this.#endpoint + "/login", { username, password });
    if (res === "Ok.") return { ok: true, message: "" };
    return { ok: false, message: res };
  };

  static logout = async () => {
    return await get(this.#endpoint + "/logout");
  };
}
