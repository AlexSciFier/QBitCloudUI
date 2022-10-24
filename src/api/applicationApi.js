import { get, postJSON, postURLEncoded } from "./baseApi";

/**
 * @typedef {Object} preferences
 * @property {string} locale	Currently selected language (e.g. en_GB for English)
 * @property {boolean} create_subfolder_enabled	True if a subfolder should be created when adding a torrent
 * @property {boolean} start_paused_enabled	True if torrents should be added in a Paused state
 * @property {number} auto_delete_mode	TODO
 * @property {boolean} preallocate_all	True if disk space should be pre-allocated for all files
 * @property {boolean} incomplete_files_ext	True if ".!qB" should be appended to incomplete files
 * @property {boolean} auto_tmm_enabled	True if Automatic Torrent Management is enabled by default
 * @property {boolean} torrent_changed_tmm_enabled	True if torrent should be relocated when its Category changes
 * @property {boolean} save_path_changed_tmm_enabled	True if torrent should be relocated when the default save path changes
 * @property {boolean} category_changed_tmm_enabled	True if torrent should be relocated when its Category's save path changes
 * @property {string} save_path	Default save path for torrents, separated by slashes
 * @property {boolean} temp_path_enabled	True if folder for incomplete torrents is enabled
 * @property {string} temp_path	Path for incomplete torrents, separated by slashes
 * @property {Object<string,string | number>} scan_dirs	Property: directory to watch for torrent files, value: where torrents loaded from this directory should be downloaded to (see list of possible values below). Slashes are used as path separators; multiple key/value pairs can be specified
 * @property {string} export_dir	Path to directory to copy .torrent files to. Slashes are used as path separators
 * @property {string} export_dir_fin	Path to directory to copy .torrent files of completed downloads to. Slashes are used as path separators
 * @property {boolean} mail_notification_enabled	True if e-mail notification should be enabled
 * @property {string} mail_notification_sender	e-mail where notifications should originate from
 * @property {string} mail_notification_email	e-mail to send notifications to
 * @property {string} mail_notification_smtp	smtp server for e-mail notifications
 * @property {boolean} mail_notification_ssl_enabled	True if smtp server requires SSL connection
 * @property {boolean} mail_notification_auth_enabled	True if smtp server requires authentication
 * @property {string} mail_notification_username	Username for smtp authentication
 * @property {string} mail_notification_password	Password for smtp authentication
 * @property {boolean} autorun_enabled	True if external program should be run after torrent has finished downloading
 * @property {string} autorun_program	Program path/name/arguments to run if autorun_enabled is enabled; path is separated by slashes; you can use %f and %n arguments, which will be expanded by qBittorent as path_to_torrent_file and torrent_name (from the GUI; not the .torrent file name) respectively
 * @property {boolean} queueing_enabled	True if torrent queuing is enabled
 * @property {number} max_active_downloads	Maximum number of active simultaneous downloads
 * @property {number} max_active_torrents	Maximum number of active simultaneous downloads and uploads
 * @property {number} max_active_uploads	Maximum number of active simultaneous uploads
 * @property {boolean} dont_count_slow_torrents	If true torrents w/o any activity (stalled ones) will not be counted towards max_active_* limits; see dont_count_slow_torrents for more information
 * @property {number} slow_torrent_dl_rate_threshold	Download rate in KiB/s for a torrent to be considered "slow"
 * @property {number} slow_torrent_ul_rate_threshold	Upload rate in KiB/s for a torrent to be considered "slow"
 * @property {number} slow_torrent_inactive_timer	Seconds a torrent should be inactive before considered "slow"
 * @property {boolean} max_ratio_enabled	True if share ratio limit is enabled
 * @property {number} max_ratio	Get the global share ratio limit
 * @property {number} max_ratio_act	Action performed when a torrent reaches the maximum share ratio. See list of possible values here below.
 * @property {number} listen_port	Port for incoming connections
 * @property {boolean} upnp	True if UPnP/NAT-PMP is enabled
 * @property {boolean} random_port	True if the port is randomly selected
 * @property {number} dl_limit	Global download speed limit in KiB/s; -1 means no limit is applied
 * @property {number} up_limit	Global upload speed limit in KiB/s; -1 means no limit is applied
 * @property {number} max_connec	Maximum global number of simultaneous connections
 * @property {number} max_connec_per_torrent	Maximum number of simultaneous connections per torrent
 * @property {number} max_uploads	Maximum number of upload slots
 * @property {number} max_uploads_per_torrent	Maximum number of upload slots per torrent
 * @property {number} stop_tracker_timeout	Timeout in seconds for a stopped announce request to trackers
 * @property {boolean} enable_piece_extent_affinity	True if the advanced libtorrent option piece_extent_affinity is enabled
 * @property {number} bittorrent_protocol	Bittorrent Protocol to use (see list of possible values below)
 * @property {boolean} limit_utp_rate	True if [du]l_limit should be applied to uTP connections; this option is only available in qBittorent built against libtorrent version 0.16.X and higher
 * @property {boolean} limit_tcp_overhead	True if [du]l_limit should be applied to estimated TCP overhead (service data: e.g. packet headers)
 * @property {boolean} limit_lan_peers	True if [du]l_limit should be applied to peers on the LAN
 * @property {number} alt_dl_limit	Alternative global download speed limit in KiB/s
 * @property {number} alt_up_limit	Alternative global upload speed limit in KiB/s
 * @property {boolean} scheduler_enabled	True if alternative limits should be applied according to schedule
 * @property {number} schedule_from_hour	Scheduler starting hour
 * @property {number} schedule_from_min	Scheduler starting minute
 * @property {number} schedule_to_hour	Scheduler ending hour
 * @property {number} schedule_to_min	Scheduler ending minute
 * @property {number} scheduler_days	Scheduler days. See possible values here below
 * @property {boolean} dht	True if DHT is enabled
 * @property {boolean} pex	True if PeX is enabled
 * @property {boolean} lsd	True if LSD is enabled
 * @property {number} encryption	See list of possible values here below
 * @property {boolean} anonymous_mode	If true anonymous mode will be enabled; read more here; this option is only available in qBittorent built against libtorrent version 0.16.X and higher
 * @property {number} proxy_type	See list of possible values here below
 * @property {string} proxy_ip	Proxy IP address or domain name
 * @property {number} proxy_port	Proxy port
 * @property {boolean} proxy_peer_connections	True if peer and web seed connections should be proxified; this option will have any effect only in qBittorent built against libtorrent version 0.16.X and higher
 * @property {boolean} proxy_auth_enabled	True proxy requires authentication; doesn't apply to SOCKS4 proxies
 * @property {string} proxy_username	Username for proxy authentication
 * @property {string} proxy_password	Password for proxy authentication
 * @property {boolean} proxy_torrents_only	True if proxy is only used for torrents
 * @property {boolean} ip_filter_enabled	True if external IP filter should be enabled
 * @property {string} ip_filter_path	Path to IP filter file (.dat, .p2p, .p2b files are supported); path is separated by slashes
 * @property {boolean} ip_filter_trackers	True if IP filters are applied to trackers
 * @property {string} web_ui_domain_list	Comma-separated list of domains to accept when performing Host header validation
 * @property {string} web_ui_address	IP address to use for the WebUI
 * @property {number} web_ui_port	WebUI port
 * @property {boolean} web_ui_upnp	True if UPnP is used for the WebUI port
 * @property {string} web_ui_username	WebUI username
 * @property {string} web_ui_password	For API ≥ v2.3.0: Plaintext WebUI password, not readable, write-only. For API < v2.3.0: MD5 hash of WebUI password, hash is generated from the following string: username:Web UI Access:plain_text_web_ui_password
 * @property {boolean} web_ui_csrf_protection_enabled	True if WebUI CSRF protection is enabled
 * @property {boolean} web_ui_clickjacking_protection_enabled	True if WebUI clickjacking protection is enabled
 * @property {boolean} web_ui_secure_cookie_enabled	True if WebUI cookie Secure flag is enabled
 * @property {number} web_ui_max_auth_fail_count	Maximum number of authentication failures before WebUI access ban
 * @property {number} web_ui_ban_duration	WebUI access ban duration in seconds
 * @property {number} web_ui_session_timeout	Seconds until WebUI is automatically signed off
 * @property {boolean} web_ui_host_header_validation_enabled	True if WebUI host header validation is enabled
 * @property {boolean} bypass_local_auth	True if authentication challenge for loopback address (127.0.0.1) should be disabled
 * @property {boolean} bypass_auth_subnet_whitelist_enabled	True if webui authentication should be bypassed for clients whose ip resides within (at least) one of the subnets on the whitelist
 * @property {string} bypass_auth_subnet_whitelist	(White)list of ipv4/ipv6 subnets for which webui authentication should be bypassed; list entries are separated by commas
 * @property {boolean} alternative_webui_enabled	True if an alternative WebUI should be used
 * @property {string} alternative_webui_path	File path to the alternative WebUI
 * @property {boolean} use_https	True if WebUI HTTPS access is enabled
 * @property {string} ssl_key	For API < v2.0.1: SSL keyfile contents (this is a not a path)
 * @property {string} ssl_cert	For API < v2.0.1: SSL certificate contents (this is a not a path)
 * @property {string} web_ui_https_key_path	For API ≥ v2.0.1: Path to SSL keyfile
 * @property {string} web_ui_https_cert_path	For API ≥ v2.0.1: Path to SSL certificate
 * @property {boolean} dyndns_enabled	True if server DNS should be updated dynamically
 * @property {number} dyndns_service	See list of possible values here below
 * @property {string} dyndns_username	Username for DDNS service
 * @property {string} dyndns_password	Password for DDNS service
 * @property {string} dyndns_domain	Your DDNS domain name
 * @property {number} rss_refresh_interval	RSS refresh interval
 * @property {number} rss_max_articles_per_feed	Max stored articles per RSS feed
 * @property {boolean} rss_processing_enabled	Enable processing of RSS feeds
 * @property {boolean} rss_auto_downloading_enabled	Enable auto-downloading of torrents from the RSS feeds
 * @property {boolean} rss_download_repack_proper_episodes	For API ≥ v2.5.1: Enable downloading of repack/proper Episodes
 * @property {string} rss_smart_episode_filters	For API ≥ v2.5.1: List of RSS Smart Episode Filters
 * @property {boolean} add_trackers_enabled	Enable automatic adding of trackers to new torrents
 * @property {string} add_trackers	List of trackers to add to new torrent
 * @property {boolean} web_ui_use_custom_http_headers_enabled	For API ≥ v2.5.1: Enable custom http headers
 * @property {string} web_ui_custom_http_headers	For API ≥ v2.5.1: List of custom http headers
 * @property {boolean} max_seeding_time_enabled	True enables max seeding time
 * @property {number} max_seeding_time	Number of minutes to seed a torrent
 * @property {string} announce_ip	TODO
 * @property {boolean} announce_to_all_tiers	True always announce to all tiers
 * @property {boolean} announce_to_all_trackers	True always announce to all trackers in a tier
 * @property {number} async_io_threads	Number of asynchronous I/O threads
 * @property {string} banned_IPs	List of banned IPs
 * @property {number} checking_memory_use	Outstanding memory when checking torrents in MiB
 * @property {string} current_interface_address	IP Address to bind to. Empty String means All addresses
 * @property {string} current_network_interface	Network Interface used
 * @property {number} disk_cache	Disk cache used in MiB
 * @property {number} disk_cache_ttl	Disk cache expiry interval in seconds
 * @property {number} embedded_tracker_port	Port used for embedded tracker
 * @property {boolean} enable_coalesce_read_write	True enables coalesce reads & writes
 * @property {boolean} enable_embedded_tracker	True enables embedded tracker
 * @property {boolean} enable_multi_connections_from_same_ip	True allows multiple connections from the same IP address
 * @property {boolean} enable_os_cache	True enables os cache
 * @property {boolean} enable_upload_suggestions	True enables sending of upload piece suggestions
 * @property {number} file_pool_size	File pool size
 * @property {number} outgoing_ports_max	Maximal outgoing port (0: Disabled)
 * @property {number} outgoing_ports_min	Minimal outgoing port (0: Disabled)
 * @property {boolean} recheck_completed_torrents	True rechecks torrents on completion
 * @property {boolean} resolve_peer_countries	True resolves peer countries
 * @property {number} save_resume_data_interval	Save resume data interval in min
 * @property {number} send_buffer_low_watermark	Send buffer low watermark in KiB
 * @property {number} send_buffer_watermark	Send buffer watermark in KiB
 * @property {number} send_buffer_watermark_factor	Send buffer watermark factor in percent
 * @property {number} socket_backlog_size	Socket backlog size
 * @property {number} upload_choking_algorithm	Upload choking algorithm used (see list of possible values below)
 * @property {number} upload_slots_behavior	Upload slots behavior used (see list of possible values below)
 * @property {number} upnp_lease_duration	UPnP lease duration (0: Permanent lease)
 * @property {number} utp_tcp_mixed_mode	μTP-TCP mixed mode algorithm (see list of possible values below)
 */

export default class Application {
  static #endpoint = "/api/v2/app";

  static login = async (username, password) => {
    let res = await get(this.#endpoint + "/login", { username, password });
    if (res === "Ok.") return { ok: true, message: "" };
    return { ok: false, message: res };
  };

  static getVersion = async () => {
    let res = await get(this.#endpoint + "/version");
    return res;
  };
  static getWebApiVersion = async () => {
    let res = await get(this.#endpoint + "/webapiVersion");
    return res;
  };
  static getBuildInfo = async () => {
    let res = await get(this.#endpoint + "/buildInfo");
    return res;
  };
  static shutdown = async () => {
    let res = await get(this.#endpoint + "/shutdown");
    return res;
  };
  /**
   *
   * @returns {preferences}
   */
  static getPreferences = async () => {
    let res = await get(this.#endpoint + "/preferences");
    return res;
  };
  static setPreferences = async (json) => {
    let res = await postURLEncoded(this.#endpoint + "/setPreferences", {
      json: JSON.stringify(json),
    });
    return res;
  };
  static getDefaultSavePath = async () => {
    let res = await get(this.#endpoint + "/defaultSavePath");
    return res;
  };
}
