import { get } from "./baseApi";

export default class Transfer {
  static #endpoint = "/api/v2/transfer";

  static getInfo = async () => {
    return await get(this.#endpoint + "/info");
  };

  static getSpeedLimitsMode = async () => {
    return await get(this.#endpoint + "/speedLimitsMode");
  };

  static toggleSpeedLimitsMode = async () => {
    return await get(this.#endpoint + "/toggleSpeedLimitsMode");
  };

  static getDownloadLimit = async () => {
    return await get(this.#endpoint + "/downloadLimit");
  };
  /**
   *
   * @param {number} limit The global download speed limit to set in bytes/second
   * @returns
   */
  static setDownloadLimit = async (limit) => {
    return await get(this.#endpoint + "/setDownloadLimit", { limit });
  };

  static getUploadLimit = async () => {
    return await get(this.#endpoint + "/uploadLimit");
  };
  /**
   *
   * @param {number} limit The global upload speed limit to set in bytes/second
   * @returns
   */
  static setUploadLimit = async (limit) => {
    return await get(this.#endpoint + "/setUploadLimit", { limit });
  };
  /**
   *
   * @param {string} peers The peer to ban, or multiple peers separated by a pipe `|`. Each peer is a colon-separated `host:port`
   * @returns
   */
  static banPeers = async (peers) => {
    return await get(this.#endpoint + "/banPeers", { peers });
  };
}
