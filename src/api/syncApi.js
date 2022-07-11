import { get } from "./baseApi";

export default class Sync {
  static #endpoint = "/api/v2/sync";
  static #rid = 0;
  static getMainData = async (fullUpdate = false) => {
    if (fullUpdate) this.#rid = 0;
    let res = await get(this.#endpoint + "/maindata", { rid: this.#rid });
    this.#rid = res?.rid || 0;
    return res;
  };

  static getTorrentPeers = async (hash) => {
    return await get(this.#endpoint + "/torrentPeers", { hash });
  };
}
