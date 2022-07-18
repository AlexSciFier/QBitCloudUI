import { get, postMultipart } from "./baseApi";

/**
 * @typedef {Object} TorrentInfo
 * @property {number} added_on Time (Unix Epoch) when the torrent was added to the client
 * @property {number} amount_left Amount of data left to download (bytes)
 * @property {bool} auto_tmm Whether this torrent is managed by Automatic Torrent Management
 * @property {float} availability Percentage of file pieces currently available
 * @property {string} category Category of the torrent
 * @property {number} completed Amount of transfer data completed (bytes)
 * @property {number} completion_on Time (Unix Epoch) when the torrent completed
 * @property {string} content_path Absolute path of torrent content (root path for multifile torrents, absolute file path for singlefile torrents)
 * @property {number} dl_limit Torrent download speed limit (bytes/s). `-1` if ulimited.
 * @property {number} dlspeed Torrent download speed (bytes/s)
 * @property {number} downloaded Amount of data downloaded
 * @property {number} downloaded_session Amount of data downloaded this session
 * @property {number} eta Torrent ETA (seconds)
 * @property {bool} f_l_piece_prio True if first last piece are prioritized
 * @property {bool} force_start True if force start is enabled for this torrent
 * @property {string} hash Torrent hash
 * @property {number} last_activity Last time (Unix Epoch) when a chunk was downloaded/uploaded
 * @property {string} magnet_uri Magnet URI corresponding to this torrent
 * @property {float} max_ratio Maximum share ratio until torrent is stopped from seeding/uploading
 * @property {number} max_seeding_time Maximum seeding time (seconds) until torrent is stopped from seeding
 * @property {string} name Torrent name
 * @property {number} num_complete Number of seeds in the swarm
 * @property {number} num_incomplete Number of leechers in the swarm
 * @property {number} num_leechs Number of leechers connected to
 * @property {number} num_seeds Number of seeds connected to
 * @property {number} priority Torrent priority. Returns -1 if queuing is disabled or torrent is in seed mode
 * @property {float} progress Torrent progress (percentage/100)
 * @property {float} ratio Torrent share ratio. Max ratio value: 9999.
 * @property {float} ratio_limit TODO (what is different from `max_ratio`?)
 * @property {string} save_path Path where this torrent's data is stored
 * @property {number} seeding_time Torrent elapsed time while complete (seconds)
 * @property {number} seeding_time_limit TODO (what is different from `max_seeding_time`?) seeding_time_limit is a per torrent setting, when Automatic Torrent Management is disabled, furthermore then max_seeding_time is set to seeding_time_limit for this torrent. If Automatic Torrent Management is enabled, the value is -2. And if max_seeding_time is unset it have a default value -1.
 * @property {number} seen_complete Time (Unix Epoch) when this torrent was last seen complete
 * @property {bool} seq_dl True if sequential download is enabled
 * @property {number} size Total size (bytes) of files selected for download
 * @property {string} state Torrent state. See table here below for the possible values
 * @property {bool} super_seeding True if super seeding is enabled
 * @property {string} tags Comma-concatenated tag list of the torrent
 * @property {number} time_active Total active time (seconds)
 * @property {number} total_size Total size (bytes) of all file in this torrent (including unselected ones)
 * @property {string} tracker The first tracker with working status. Returns empty string if no tracker is working.
 * @property {number} up_limit Torrent upload speed limit (bytes/s). `-1` if ulimited.
 * @property {number} uploaded Amount of data uploaded
 * @property {number} uploaded_session Amount of data uploaded this session
 * @property {number} upspeed Torrent upload speed (bytes/s)
 */

export default class Torrents {
  static #endpoint = "/api/v2/torrents";

  /**
   * @readonly
   * @enum {string}
   */
  static FilterStateEnum = Object.freeze({
    ALL: "all",
    DOWNLOADING: "downloading",
    SEEDING: "seeding",
    COMPLETED: "completed",
    PAUSED: "paused",
    ACTIVE: "active",
    INACTIVE: "inactive",
    RESUMED: "resumed",
    STALLED: "stalled",
    STALLED_UPLOADING: "stalled_uploading",
    STALLED_DOWNLOADING: "stalled_downloading",
    ERRORED: "errored",
  });

  /**
   * Get torrent list
   * @async
   * @param {FilterStateEnum} filter Filter torrent list by state. Allowed state filters: `Torrents.FilterStateEnum`
   * @param {string} category Get torrents with the given category (empty string means "without category"; no "category" parameter means "any category" <- broken until #11748 is resolved). Remember to URL-encode the category name. For example, My category becomes My%20category
   * @param {string} tag Get torrents with the given tag (empty string means "without tag"; no "tag" parameter means "any tag". Remember to URL-encode the category name. For example, My tag becomes My%20tag
   * @param {string} sort Sort torrents by given key. They can be sorted using any field of the response's JSON array (which are documented below) as the sort key.
   * @param {boolean} reverse Enable reverse sorting. Defaults to `false`
   * @param {number} limit 	Limit the number of torrents returned
   * @param {number} offset Set offset (if less than 0, offset from end)
   * @param {string} hashes Filter by hashes. Can contain multiple hashes separated by `|`
   * @returns {Promise<TorrentInfo>}
   */
  static getTorrentsInfo = async (
    filter = this.FilterStateEnum.ALL,
    category = "",
    tag = "",
    sort = "",
    reverse = false,
    limit = 0,
    offset = 0,
    hashes = ""
  ) => {
    return await get(this.#endpoint + "/info", {
      filter,
      category,
      tag,
      sort,
      reverse,
      limit,
      offset,
      hashes,
    });
  };

  /**
   *
   * @param {string} hash The hash of the torrent
   * @returns
   */
  static getProperties = async (hash) => {
    return await get(this.#endpoint + "/properties", { hash });
  };
  /**
   *
   * @param {string} hash The hash of the torrent
   * @returns
   */
  static getTrackers = async (hash) => {
    return await get(this.#endpoint + "/trackers", { hash });
  };
  /**
   *
   * @param {string} hash The hash of the torrent
   * @returns
   */
  static getWebseeds = async (hash) => {
    return await get(this.#endpoint + "/webseeds", { hash });
  };
  /**
   *
   * @param {string} hash The hash of the torrent
   * @param {string} indexes The indexes of the files you want to retrieve. indexes can contain multiple values separated by `|`.
   * @returns
   */
  static getTorrentContents = async (hash, indexes) => {
    return await get(this.#endpoint + "/files", { hash });
  };
  /**
   *
   * @param {string} hash The hash of the torrent
   * @returns
   */
  static getPieceStates = async (hash) => {
    return await get(this.#endpoint + "/pieceStates", { hash });
  };
  /**
   *
   * @param {string} hash The hash of the torrent
   * @returns
   */
  static getPieceHashes = async (hash) => {
    return await get(this.#endpoint + "/pieceHashes", { hash });
  };
  /**
   *
   * @param {string} hashes The hashes of the torrents you want to pause. `hashes` can contain multiple hashes separated by `|`, to pause multiple torrents, or set to `all`, to pause all torrents.
   * @returns
   */
  static pause = async (hashes) => {
    return await get(this.#endpoint + "/pause", { hashes });
  };
  /**
   *
   * @param {string} hashes The hashes of the torrents you want to resume. `hashes` can contain multiple hashes separated by `|`, to resume multiple torrents, or set to `all`, to resume all torrents.
   * @returns
   */
  static resume = async (hashes) => {
    return await get(this.#endpoint + "/resume", { hashes });
  };
  /**
   *
   * @param {string} hashes The hashes of the torrents you want to delete. `hashes` can contain multiple hashes separated by `|`, to delete multiple torrents, or set to `all`, to delete all torrents.
   * @param {boolean} deleteFiles If set to `true`, the downloaded data will also be deleted, otherwise has no effect.
   * @returns
   */
  static delete = async (hashes, deleteFiles = false) => {
    return await get(this.#endpoint + "/delete", { hashes, deleteFiles });
  };
  /**
   *
   * @param {string} hashes The hashes of the torrents you want to recheck. `hashes` can contain multiple hashes separated by `|`, to recheck multiple torrents, or set to `all`, to recheck all torrents.
   * @returns
   */
  static recheck = async (hashes) => {
    return await get(this.#endpoint + "/recheck", { hashes });
  };
  /**
   *
   * @param {string} hashes The hashes of the torrents you want to reannounce. `hashes` can contain multiple hashes separated by `|`, to reannounce multiple torrents, or set to `all`, to reannounce all torrents.
   * @returns
   */
  static reannounce = async (hashes) => {
    return await get(this.#endpoint + "/reannounce", { hashes });
  };
  static add = async ({
    urls,
    torrents,
    savepath = "",
    cookie = "",
    category = "",
    tags = [],
    skip_checking = false,
    paused = false,
    root_folder = undefined,
    rename = "",
    upLimit = 0,
    dlLimit = 0,
    ratioLimit = 0,
    firstLastPiecePrio = false,
    sequentialDownload = false,
  }) => {
    let res = await postMultipart(this.#endpoint + "/add", {
      urls,
      torrents,
      savepath,
      cookie,
      category,
      tags,
      skip_checking,
      paused,
      root_folder,
      rename,
      upLimit,
      dlLimit,
      ratioLimit,
      firstLastPiecePrio,
      sequentialDownload,
    });
    return await res.text();
  };

  static getAllCategories = async () => {
    return await get(this.#endpoint + "/categories");
  };

  static getAllTags = async () => {
    return await get(this.#endpoint + "/tags");
  };
}

// TODO
// addTrackers
// editTracker
// removeTrackers
// addPeers
// increasePrio
// decreasePrio
// topPrio
// bottomPrio
// filePrio
// downloadLimit
// setDownloadLimit
// setShareLimits
// uploadLimit
// setUploadLimit
// setLocation
// rename
// setCategory
//
// createCategory
// editCategory
// removeCategories
// addTags
// removeTags
//
// createTags
// deleteTags
// setAutoManagement
// toggleSequentialDownload
// toggleFirstLastPiecePrio
// setForceStart
// setSuperSeeding
// renameFile
// renameFolder
