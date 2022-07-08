import { isEmpty } from "lodash";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? document.location.origin
    : "http://localhost:8080";

export var get = async (endpoint, params = {}) => {
  var searchparams = "";
  if (isEmpty(params) === false)
    searchparams = "?" + new URLSearchParams(params).toString();
  return await fetch(new URL(endpoint + searchparams, BASE_URL), {
    credentials: "include",
  });
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
