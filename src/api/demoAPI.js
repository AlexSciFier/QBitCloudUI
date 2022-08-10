const countries = [
  { name: "Argentina", code: "AR" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Canada", code: "CA" },
  { name: "China", code: "CN" },
  { name: "Croatia", code: "HR" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Egypt", code: "EG" },
  { name: "Estonia", code: "EE" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Georgia", code: "GE" },
  { name: "Germany ", code: "DE" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Ireland", code: "IE" },
  { name: "Israel ", code: "IL" },
  { name: "Italy ", code: "IT" },
  { name: "Japan", code: "JP" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Korea (South)", code: "KR" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Luxembourg", code: "LU" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Norway", code: "NO" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation ", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States of America", code: "US" },
  { name: "Viet Nam", code: "VN" },
];

const authors = [
  "Republic Voices",
  "Pink Nation",
  "Pajama Awakening",
  "Virtual Glamour",
  "Timeless Division",
  "Mortal Circuits",
  "Invasion",
  "Aurora",
  "Iron",
  "Canon",
  "Phoenix",
  "Patience",
  "Word of Perfection",
  "Secrets of Hustle",
  "Groove of Mania",
  "Promise of the Year",
  "Soul of Paradise",
  "Dance of Malice",
  "Rain",
  "Green",
  "Phase",
  "Shift",
  "Bird",
  "Silk",
  "Thomas Everett",
  "Peter Craig",
  "Michael Johnson",
  "Albert Chandler",
  "Sean Shepherd",
  "Owen Gilmore",
  "Irvin Fame",
  "Brent Merrill",
  "Marvin Gates",
  "Stanley Edwards",
  "Stuart Knight",
  "Lee Price",
  "Coil",
  "Scratch",
  "Shift",
  "Pride",
  "Judge",
  "Cannon",
  "Brandy Wallace",
  "Rose Patrick",
  "Lilly Page",
  "Jenna Edwards",
  "Beth Colt",
  "Kate Thompson",
  "Ann Taylor",
  "Sophie March",
  "Madelyn Angel",
  "Kaylee Gordon",
  "Erin Ramone",
  "Jennie Walker",
];

const album = [
  "All doubt",
  "March of ants",
  "Birthday suit",
  "Animals",
  "Concept art",
  "Blank canvas",
  "For eternity",
  "MVP",
  "Climate changed",
  "No celebration",
  "Louder than words",
  "Final draft",
  "Hold the phone",
  "Army of ants",
  "Preaching choir",
  "Double trouble",
  "Company of two",
  "Dreams and nightmares",
  "Speak of the demon",
  "Beasts of beauty",
  "March of ants",
  "Cat got my tongue",
  "Apparatus",
  "The last laugh",
  "Here we go again",
  "Love life",
  "Fault of treasures",
  "Cat eat cat world",
  "Cold shoulder",
  "Game on",
  "Childhood memoires",
  "Honesty",
  "Chaos",
  "Emotional wreckage",
  "Ask and receive",
];

const movies = [
  "Mercenary Of New Earth",
  "Hero In The Future",
  "Angel Of Our Destiny",
  "Martian Of The Dead",
  "Creators Of Our Destiny",
  "Soldiers Of The Outlands",
  "Defenders Of Exploration",
  "Cyborgs Of Moondust",
  "Spies And Recruits",
  "Children And Leaders",
  "Soldiers And Aliens",
  "Guardians And Soldiers",
  "Element Of The Universe",
  "Ascension On My Ship",
  "Beginning Of Earth",
  "Victory Of The Outlands",
  "Dependent On The End Of Earth",
  "Experience Of The Aliens",
  "Devoted To First Contact",
  "Hidden In The Intruders",
  "Afraid Of The Depths",
  "Fixed In Robots",
  "Defenseless Against The Secrets",
  "Perfection Of My Journey",
];

const states = [
  "error",
  "missingFiles",
  "uploading",
  "pausedUP",
  "queuedUP",
  "stalledUP",
  "checkingUP",
  "forcedUP",
  "allocating",
  "downloading",
  "metaDL",
  "pausedDL",
  "queuedDL",
  "stalledDL",
  "checkingDL",
  "forcedDL",
  "checkingResumeData",
  "moving",
  "unknown",
];

const dirNames = [
  "content",
  "bin",
  "Sub",
  "album cover",
  "ost",
  "data",
  "other",
  "dev",
  "New Dirctory",
  "New Dirctory (1)",
  "New Dirctory (2)",
  "New Dirctory (3)",
  "New Dirctory (3) - Copy",
  "docker",
];

const fileNames = [
  "NewUntittledVideo",
  "audioFromSource",
  "test",
  "satrtup",
  "README",
  "NewDocument",
  "Untitled",
  "playlist",
  "logo128",
  "066_2022-04-12_14-47-59.14",
  "321645100037790",
];

const exts = [
  ".txt",
  ".sh",
  ".mp3",
  ".wav",
  ".mkv",
  ".mp4",
  ".doc",
  ".pdf",
  ".md",
];

let movieTags = ["drama", "comedy", "documentary", "sci-fi", "action", "anime"];

let musicTags = ["house", "hip-hop", "drum-n-bass", "rock"];

let tags = [
  "linux",
  "windows",
  "tools",
  "work",
  "good",
  "delete later",
  ...movieTags,
  ...musicTags,
];

let getRandomTorrentInfo = () => {
  let type = Math.random();
  let hash = randomInteger(0, 9999999999).toString();
  let name = "";
  let category = "";
  let tag = "";
  let state = getRandomItemFromArray(states);
  let progress = state.toLowerCase().includes("UP") ? 1 : Math.random();

  if (type > 0.5) {
    name = getRandomItemFromArray(movies) + " " + randomInteger(1980, 2022);
    category = "Movies";
    tag = shuffleArray(movieTags).splice(0, 3).join(", ");
  } else {
    name =
      getRandomItemFromArray(authors) +
      " - " +
      getRandomItemFromArray(album) +
      " " +
      randomInteger(1980, 2022);
    category = "Music";
    tag = shuffleArray(musicTags).splice(0, 1).join(", ");
  }

  return {
    added_on: 1655096765,
    amount_left: 3654957056,
    auto_tmm: false,
    availability: 0,
    category: category,
    completed: 0,
    completion_on: -10800,
    content_path: "C:\\Users\\User\\Downloads\\" + name,
    dl_limit: -1,
    dlspeed: 5215482,
    download_path: "",
    downloaded: 1177798292,
    downloaded_session: 0,
    eta: 60541,
    f_l_piece_prio: false,
    force_start: false,
    hash: hash,
    infohash_v1: hash,
    infohash_v2: "",
    last_activity: 1659097765,
    magnet_uri: "magnet:?xt=urn:btih:1&dn=" + name,
    max_ratio: -1,
    max_seeding_time: -1,
    name: name,
    num_complete: 0,
    num_incomplete: 100,
    num_leechs: randomInteger(0, 100),
    num_seeds: randomInteger(0, 100),
    priority: 2,
    progress: progress,
    ratio: 0.0002810769910676692,
    ratio_limit: -2,
    save_path: "C:\\Users\\User\\Downloads",
    seeding_time: 0,
    seeding_time_limit: -2,
    seen_complete: 1659103345,
    seq_dl: false,
    size: 3654957056,
    state: state,
    super_seeding: false,
    tags: tag,
    time_active: 484,
    total_size: 3654957056,
    tracker: "",
    trackers_count: 2,
    up_limit: -1,
    uploaded: 331052,
    uploaded_session: 0,
    upspeed: 324154,
  };
};

let shuffleArray = (array) => {
  let arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

let getRandomItemFromArray = (array) =>
  array[randomInteger(0, array.length - 1)];

let randomTorrentList = () => {
  let randomArray = [];
  for (let index = 0; index < 5; index++) {
    randomArray.push(getRandomTorrentInfo());
  }
  return [
    {
      added_on: 1659097765,
      amount_left: 3654957056,
      auto_tmm: false,
      availability: 0,
      category: "ISO",
      completed: 0,
      completion_on: -10800,
      content_path:
        "C:\\Users\\User\\Downloads\\ubuntu-22.04-desktop-amd64.iso",
      dl_limit: -1,
      dlspeed: 5215482,
      download_path: "",
      downloaded: 1177798292,
      downloaded_session: 0,
      eta: 60541,
      f_l_piece_prio: false,
      force_start: false,
      hash: "2c6b6858d61da9543d4231a71db4b1c9264b0685",
      infohash_v1: "2c6b6858d61da9543d4231a71db4b1c9264b0685",
      infohash_v2: "",
      last_activity: 1659097765,
      magnet_uri:
        "magnet:?xt=urn:btih:2c6b6858d61da9543d4231a71db4b1c9264b0685&dn=ubuntu-22.04-desktop-amd64.iso&tr=https%3a%2f%2ftorrent.ubuntu.com%2fannounce&tr=https%3a%2f%2fipv6.torrent.ubuntu.com%2fannounce",
      max_ratio: -1,
      max_seeding_time: -1,
      name: "ubuntu-22.04-desktop-amd64.iso",
      num_complete: 0,
      num_incomplete: 100,
      num_leechs: 0,
      num_seeds: 0,
      priority: 2,
      progress: 0,
      ratio: 0.0002810769910676692,
      ratio_limit: -2,
      save_path: "C:\\Users\\User\\Downloads",
      seeding_time: 0,
      seeding_time_limit: -2,
      seen_complete: 1659103345,
      seq_dl: false,
      size: 3654957056,
      state: "downloading",
      super_seeding: false,
      tags: "linux",
      time_active: 484,
      total_size: 3654957056,
      tracker: "",
      trackers_count: 2,
      up_limit: -1,
      uploaded: 331052,
      uploaded_session: 0,
      upspeed: 324154,
    },
    ...randomArray,
  ];
};

let torrentInfo = {
  addition_date: 1659097765,
  comment: "Ubuntu CD releases.ubuntu.com",
  completion_date: -1,
  created_by: "mktorrent 1.1",
  creation_date: 1650550976,
  dl_limit: -1,
  dl_speed: 5215482,
  dl_speed_avg: 2433467,
  download_path: "",
  eta: 6054,
  infohash_v1: "2c6b6858d61da9543d4231a71db4b1c9264b0685",
  infohash_v2: "",
  last_seen: 1659103345,
  nb_connections: 42,
  nb_connections_limit: 100,
  peers: 54,
  peers_total: 100,
  piece_size: 262144,
  pieces_have: 0,
  pieces_num: 13943,
  reannounce: 0,
  save_path: "C:\\Users\\User\\Downloads",
  seeding_time: 0,
  seeds: 35,
  seeds_total: 100,
  share_ratio: 0.0002810769910676692,
  time_elapsed: 484,
  total_downloaded: 1177798292,
  total_downloaded_session: 0,
  total_size: 3654957056,
  total_uploaded: 331052,
  total_uploaded_session: 0,
  total_wasted: 0,
  up_limit: -1,
  up_speed: 324154,
  up_speed_avg: 683,
};

let data = {
  "/api/v2/auth/login": "Ok.",
  "/api/v2/transfer/info": {
    connection_status: "firewalled",
    dht_nodes: 343,
    dl_info_data: 0,
    dl_info_speed: 0,
    dl_rate_limit: 0,
    up_info_data: 0,
    up_info_speed: 0,
    up_rate_limit: 0,
  },
  "/api/v2/torrents/categories": {
    Music: { name: "Music", savePath: "/music" },
    Movies: { name: "Movies", savePath: "/movies" },
    ISO: { name: "ISO", savePath: "/iso" },
  },
  "/api/v2/torrents/tags": tags,
  "/api/v2/torrents/info": randomTorrentList(),
  "/api/v2/torrents/add": "Ok.",
  "/api/v2/app/preferences": handlePreferences(),
  "/api/v2/torrents/files": handleFile(),
  "/api/v2/torrents/trackers": handleTrackers(),
  "/api/v2/torrents/properties": handleTorrentProperties(),
};

let maindata = {
  categories: {
    Music: { name: "Music", savePath: "/music" },
    Movies: { name: "Movies", savePath: "/movies" },
    ISO: { name: "ISO", savePath: "/iso" },
  },
  full_update: true,
  rid: 1,
  server_state: {
    alltime_dl: 5379253305,
    alltime_ul: 486761488,
    average_time_queue: 0,
    connection_status: "connected",
    dht_nodes: 299,
    dl_info_data: 0,
    dl_info_speed: 0,
    dl_rate_limit: 0,
    free_space_on_disk: 5069357056,
    global_ratio: "0,09",
    queued_io_jobs: 0,
    queueing: false,
    read_cache_hits: "0",
    read_cache_overload: "0",
    refresh_interval: 1500,
    total_buffers_size: 0,
    total_peer_connections: 0,
    total_queued_size: 0,
    total_wasted_session: 0,
    up_info_data: 0,
    up_info_speed: 0,
    up_rate_limit: 0,
    use_alt_speed_limits: false,
    write_cache_overload: "0",
  },
  tags: ["linux", "tools", "work", "open-source"],
  torrents: {},
  trackers: {
    "http://[2001:470:25:482::2]:2710/announce": [
      "7c22ae59ed695967276d73ae65a5fcbe1cfd9e5b",
    ],
    "http://bt.t-ru.org/ann?magnet": [
      "c9d7addcbf513e854889c5fbb25b3c89691d3525",
    ],
    "http://bt02.nnm-club.cc:2710/announce": [
      "7c22ae59ed695967276d73ae65a5fcbe1cfd9e5b",
    ],
    "http://bt02.nnm-club.info:2710/announce": [
      "7c22ae59ed695967276d73ae65a5fcbe1cfd9e5b",
    ],
    "http://bt2.t-ru.org/ann?magnet": [
      "6dd8009abd733dce57bf9ddb50020e554300ffb8",
    ],
    "http://bt3.t-ru.org/ann?magnet": [
      "0f8f7a9bb773ad878efb0dbdca2269e6deeba2d9",
    ],
    "http://retracker.local/announce.php": [
      "7c22ae59ed695967276d73ae65a5fcbe1cfd9e5b",
    ],
    "https://ipv6.torrent.ubuntu.com/announce": [
      "2c6b6858d61da9543d4231a71db4b1c9264b0685",
    ],
    "https://torrent.ubuntu.com/announce": [
      "2c6b6858d61da9543d4231a71db4b1c9264b0685",
    ],
  },
};

function getNextRandomValue(prev, ofset) {
  if (prev === 0) prev = Math.floor(Math.random() * 1024);
  let diff = randomInteger(-ofset, ofset);
  return Math.floor(Math.max(prev + diff, 0));
}

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleTorrentProperties() {
  let dataResponse = { ...torrentInfo };
  return dataResponse;
}

function handleMainData(params) {
  let dataResponse = { ...maindata };
  if (params.rid > 0) {
    delete dataResponse.full_update;
    delete dataResponse.tags;
    delete dataResponse.categories;
    delete dataResponse.trackers;
  }
  dataResponse.rid = params.rid + 1;
  dataResponse.server_state.dl_info_speed = getNextRandomValue(
    dataResponse.server_state.dl_info_speed || 9000000,
    500000
  );
  dataResponse.server_state.up_info_speed = getNextRandomValue(
    dataResponse.server_state.up_info_speed || 3000000,
    500000
  );
  dataResponse.server_state.dht_nodes = getNextRandomValue(
    (dataResponse.server_state.dht_nodes || 100) + 1,
    5
  );

  dataResponse.server_state.dl_info_data +=
    dataResponse.server_state.dl_info_speed;

  dataResponse.server_state.up_info_data +=
    dataResponse.server_state.up_info_speed;

  dataResponse.server_state.alltime_dl +=
    dataResponse.server_state.dl_info_speed;

  dataResponse.server_state.alltime_ul +=
    dataResponse.server_state.up_info_speed;

  data["/api/v2/torrents/info"].forEach((torrent) => {
    dataResponse.torrents = {
      ...dataResponse.torrents,
      [torrent.hash]: {
        progress: torrent.state === "downloading" ? Math.random() : 1,
        dlspeed:
          torrent.state === "uploading" ? 0 : randomInteger(500000, 7000000),
        upspeed: randomInteger(20000, 4000000),
      },
    };
  });
  return dataResponse;
}

function handleTrackers() {
  return [
    {
      msg: "",
      num_downloaded: 0,
      num_leeches: 0,
      num_peers: 0,
      num_seeds: 0,
      status: 2,
      tier: -1,
      url: "** [DHT] **",
    },
    {
      msg: "",
      num_downloaded: 0,
      num_leeches: 0,
      num_peers: 0,
      num_seeds: 0,
      status: 2,
      tier: -1,
      url: "** [PeX] **",
    },
    {
      msg: "",
      num_downloaded: 0,
      num_leeches: 0,
      num_peers: 0,
      num_seeds: 0,
      status: 2,
      tier: -1,
      url: "** [LSD] **",
    },
    {
      msg: "Placeholder tracker",
      num_downloaded: randomInteger(-1, 100),
      num_leeches: randomInteger(-1, 100),
      num_peers: randomInteger(-1, 100),
      num_seeds: randomInteger(-1, 100),
      status: 2,
      tier: 0,
      url: "http://bt-tracker.org/announce",
    },
  ];
}

function getRandomPeer() {
  let country = getRandomItemFromArray(countries);
  let ip =
    randomInteger(1, 255) +
    "." +
    randomInteger(0, 255) +
    "." +
    randomInteger(0, 255) +
    "." +
    randomInteger(0, 255);
  let port = randomInteger(3000, 90000);

  return {
    client: "",
    connection: "μTP",
    country: country.name,
    country_code: country.code,
    dl_speed: randomInteger(20000, 900000),
    downloaded: 0,
    files: "",
    flags: "P",
    flags_desc: "P = μTP",
    ip: ip,
    port: port,
    progress: Math.random(),
    relevance: 0,
    up_speed: randomInteger(10000, 500000),
    uploaded: 0,
  };
}

let lastPeers;
function handlePeers() {
  let peers = {};
  for (let index = 0; index < 20; index++) {
    let peer = getRandomPeer();
    peers = { ...peers, [`${peer.ip}:${peer.port}`]: peer };
  }
  return {
    peers: peers,
    peers_removed: lastPeers,
    rid: 4,
  };
}

function getRandomFile(level) {
  let size = randomInteger(1024, 1024 * 1024 * 1024 * 10);
  let path = [];
  for (let index = 0; index <= level; index++) {
    if (index === level) {
      path.push(
        getRandomItemFromArray(fileNames) + getRandomItemFromArray(exts)
      );
    } else {
      path.push(getRandomItemFromArray(dirNames));
    }
  }
  return {
    availability: -1,
    index: 0,
    is_seed: true,
    name: path.join("/"),
    piece_range: [0, 889],
    priority: 1,
    progress: Math.random(),
    size: size,
  };
}

function handleFile() {
  let files = [];
  let levels = randomInteger(0, 4);
  for (let level = levels; level >= 0; level--) {
    for (
      let index = 0;
      index < randomInteger(1 * level + 1, 3 * level + 1);
      index++
    ) {
      files.push(getRandomFile(level));
    }
  }

  return files;
}

function handlePreferences() {
  return {
    add_trackers: "",
    add_trackers_enabled: false,
    alt_dl_limit: -1,
    alt_up_limit: -1,
    alternative_webui_enabled: true,
    alternative_webui_path: "D:/Dev/qbittorrent-webui/build",
    announce_ip: "",
    announce_to_all_tiers: true,
    announce_to_all_trackers: false,
    anonymous_mode: false,
    async_io_threads: 10,
    auto_delete_mode: 0,
    auto_tmm_enabled: false,
    autorun_enabled: false,
    autorun_program: "",
    banned_IPs: "",
    bittorrent_protocol: 0,
    block_peers_on_privileged_ports: false,
    bypass_auth_subnet_whitelist:
      "127.0.0.1/32\n192.168.0.0/16\n192.168.0.89/32",
    bypass_auth_subnet_whitelist_enabled: false,
    bypass_local_auth: false,
    category_changed_tmm_enabled: false,
    checking_memory_use: 32,
    connection_speed: 30,
    current_interface_address: "",
    current_network_interface: "",
    dht: true,
    disk_cache: -1,
    disk_cache_ttl: 60,
    dl_limit: 0,
    dont_count_slow_torrents: false,
    dyndns_domain: "changeme.dyndns.org",
    dyndns_enabled: false,
    dyndns_password: "",
    dyndns_service: 0,
    dyndns_username: "",
    embedded_tracker_port: 9000,
    enable_coalesce_read_write: true,
    enable_embedded_tracker: false,
    enable_multi_connections_from_same_ip: false,
    enable_os_cache: true,
    enable_piece_extent_affinity: false,
    enable_upload_suggestions: false,
    encryption: 0,
    export_dir: "",
    export_dir_fin: "",
    file_pool_size: 5000,
    hashing_threads: 1,
    idn_support_enabled: false,
    incomplete_files_ext: false,
    ip_filter_enabled: false,
    ip_filter_path: "",
    ip_filter_trackers: false,
    limit_lan_peers: true,
    limit_tcp_overhead: false,
    limit_utp_rate: true,
    listen_port: 56578,
    locale: "en",
    lsd: true,
    mail_notification_auth_enabled: false,
    mail_notification_email: "",
    mail_notification_enabled: false,
    mail_notification_password: "",
    mail_notification_sender: "qBittorrent_notification@example.com",
    mail_notification_smtp: "smtp.changeme.com",
    mail_notification_ssl_enabled: false,
    mail_notification_username: "",
    max_active_downloads: 3,
    max_active_torrents: 5,
    max_active_uploads: 3,
    max_concurrent_http_announces: 50,
    max_connec: 500,
    max_connec_per_torrent: 100,
    max_ratio: -1,
    max_ratio_act: 0,
    max_ratio_enabled: false,
    max_seeding_time: -1,
    max_seeding_time_enabled: false,
    max_uploads: 20,
    max_uploads_per_torrent: 4,
    outgoing_ports_max: 0,
    outgoing_ports_min: 0,
    peer_tos: 4,
    peer_turnover: 4,
    peer_turnover_cutoff: 90,
    peer_turnover_interval: 300,
    pex: true,
    preallocate_all: false,
    proxy_auth_enabled: false,
    proxy_ip: "0.0.0.0",
    proxy_password: "",
    proxy_peer_connections: false,
    proxy_port: 8080,
    proxy_torrents_only: false,
    proxy_type: 0,
    proxy_username: "",
    queueing_enabled: false,
    random_port: false,
    reannounce_when_address_changed: false,
    recheck_completed_torrents: false,
    resolve_peer_countries: true,
    rss_auto_downloading_enabled: false,
    rss_download_repack_proper_episodes: true,
    rss_max_articles_per_feed: 50,
    rss_processing_enabled: false,
    rss_refresh_interval: 30,
    rss_smart_episode_filters:
      "s(\\d+)e(\\d+)\n(\\d+)x(\\d+)\n(\\d{4}[.\\-]\\d{1,2}[.\\-]\\d{1,2})\n(\\d{1,2}[.\\-]\\d{1,2}[.\\-]\\d{4})",
    save_path: "C:\\Users\\User\\Downloads",
    save_path_changed_tmm_enabled: false,
    save_resume_data_interval: 60,
    scan_dirs: {},
    schedule_from_hour: 8,
    schedule_from_min: 0,
    schedule_to_hour: 20,
    schedule_to_min: 0,
    scheduler_days: 5,
    scheduler_enabled: false,
    send_buffer_low_watermark: 10,
    send_buffer_watermark: 500,
    send_buffer_watermark_factor: 50,
    slow_torrent_dl_rate_threshold: 2,
    slow_torrent_inactive_timer: 60,
    slow_torrent_ul_rate_threshold: 2,
    socket_backlog_size: 30,
    ssrf_mitigation: true,
    start_paused_enabled: false,
    stop_tracker_timeout: 5,
    temp_path: "C:\\Users\\User\\Downloads\\temp",
    temp_path_enabled: false,
    torrent_changed_tmm_enabled: true,
    torrent_content_layout: "Original",
    up_limit: 0,
    upload_choking_algorithm: 1,
    upload_slots_behavior: 0,
    upnp: true,
    upnp_lease_duration: 0,
    use_https: false,
    utp_tcp_mixed_mode: 0,
    validate_https_tracker_certificate: true,
    web_ui_address: "*",
    web_ui_ban_duration: 3,
    web_ui_clickjacking_protection_enabled: false,
    web_ui_csrf_protection_enabled: false,
    web_ui_custom_http_headers:
      "Access-Control-Allow-Origin: http://localhost:3000\nAccess-Control-Allow-Credentials: true",
    web_ui_domain_list: "*",
    web_ui_host_header_validation_enabled: false,
    web_ui_https_cert_path: "",
    web_ui_https_key_path: "",
    web_ui_max_auth_fail_count: 3,
    web_ui_port: 8080,
    web_ui_reverse_proxies_list: "",
    web_ui_reverse_proxy_enabled: false,
    web_ui_secure_cookie_enabled: true,
    web_ui_session_timeout: 3600,
    web_ui_upnp: false,
    web_ui_use_custom_http_headers_enabled: true,
    web_ui_username: "admin",
  };
}

export let getPlaceholderValue = (method, endpoint, params) => {
  let dataResponse;
  let response = {
    ok: true,
    json: () => dataResponse,
    text: () => dataResponse,
  };

  if (endpoint === "/api/v2/sync/maindata") {
    dataResponse = handleMainData(params);
  }
  if (endpoint === "/api/v2/sync/torrentPeers") {
    dataResponse = handlePeers();
    lastPeers = Object.keys(dataResponse.peers);
  }

  if (dataResponse === undefined) dataResponse = data[endpoint];
  response = {
    ok: true,
    json: () => dataResponse,
    text: () => dataResponse,
  };
  console.log(method, endpoint, params, "->", dataResponse);
  return new Promise((resolve, reject) => {
    resolve(response);
  });
};
