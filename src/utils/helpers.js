export var toReadableSize = (fileSizeInBytes) => {
  var i = -1;
  var byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
  do {
    fileSizeInBytes = fileSizeInBytes / 1024;
    i++;
  } while (fileSizeInBytes > 1024);
  return Math.max(fileSizeInBytes, 0.0).toFixed(1) + byteUnits[i];
};

export var toReadableSpeed = (speedInBytes) => {
  var i = -1;
  var byteUnits = [
    " KiB/s",
    " MiB/s",
    " GiB/s",
    " TiB/s",
    " PiB/s",
    " EiB/s",
    " ZiB/s",
    " YiB/s",
  ];
  do {
    speedInBytes = speedInBytes / 1024;
    i++;
  } while (speedInBytes > 1024);
  if (isNaN(speedInBytes)) speedInBytes = 0;
  return Math.max(speedInBytes, 0.0).toFixed(2) + byteUnits[i];
};

export var toReadableTime = (input) => {
  var sec_num = input;
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;
  if (hours > 2000) return "-";

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === "00") return seconds + "s";
  if (hours === "00") return minutes + "m " + seconds + "s";
  return hours + "h " + minutes + "m " + seconds + "s";
};

/**
 *
 * @param {Object[]} mainList
 * @param {Object} update
 * @returns {Object[]}
 */
export function updateArrayWithObject(mainList, update) {
  let torrentListCopy = [...mainList];
  for (const key in update) {
    if (Object.hasOwnProperty.call(update, key)) {
      const objectItem = update[key];
      for (let i = 0; i < torrentListCopy.length; i++) {
        const arrayItem = torrentListCopy[i];
        if (arrayItem.hash === key) {
          torrentListCopy[i] = { ...torrentListCopy[i], ...objectItem };
        }
      }
      let founded = torrentListCopy.filter((item) => item.hash === key);
      if (founded.length === 0) {
        torrentListCopy.push({ ...objectItem, hash: key });
      }
    }
  }
  return torrentListCopy;
}
