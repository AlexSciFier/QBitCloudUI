import { isEmpty } from "lodash";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? document.location.origin
    : "http://localhost:8080";

export var get = async (endpoint, params = {}) => {
  var searchParams = "";
  if (isEmpty(params) === false) {
    let filteredParams = Object.entries(params).filter((entry) => {
      if (entry[1]) return true;
      return false;
    });
    searchParams = "?" + new URLSearchParams(filteredParams).toString();
  }
  let res = await fetch(new URL(endpoint + searchParams, BASE_URL), {
    credentials: "include",
  });

  let rawContentType = res.headers.get("content-type")?.split(";");
  let contentType = {
    type: rawContentType[0].trim(),
    charset: rawContentType[1]?.trim(),
  };

  if (res.ok) {
    if (contentType.type === "application/json") return await res.json();
    return await res.text();
  }
  return undefined;
};

export var postJSON = async (endpoint, data) => {
  return await fetch(new URL(endpoint, BASE_URL), {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export var postMultipart = async (endpoint, data) => {
  let formData = new FormData();
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      formData.append(key, element);
    }
  }
  return await fetch(new URL(endpoint, BASE_URL), {
    method: "POST",
    credentials: "include",
    body: formData,
  });
};

export var postURLEncoded = async (endpoint, data) => {
  var searchparams = new URLSearchParams(data);
  return await fetch(new URL(endpoint + "?" + searchparams, BASE_URL), {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
};
