import isEmpty from "lodash/isEmpty";
import { getPlaceholderValue } from "./demoAPI";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? document.location.origin
    : "http://localhost:8080";

export var get = async (endpoint, params = {}) => {
  if (process.env.REACT_APP_DEMO === "true") {
    return (await getPlaceholderValue("GET", endpoint, params)).json();
  }
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
  if (process.env.REACT_APP_DEMO === "true")
    return await getPlaceholderValue("POST", endpoint, data);
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
  if (process.env.REACT_APP_DEMO === "true")
    return await getPlaceholderValue("POST", endpoint, data);
  let filteredData = Object.entries(data).filter((entry) => {
    if (entry[1]) return true;
    return false;
  });
  let formData = new FormData();
  for (const element of filteredData) {
    if (typeof element[1] === "object") {
      for (let i = 0; i < element[1].length; i++) {
        const item = element[1][i];
        formData.append(element[0], item);
      }
    } else {
      formData.append(element[0], element[1]);
    }
  }

  return await fetch(new URL(endpoint, BASE_URL), {
    method: "POST",
    credentials: "include",
    body: formData,
  });
};

export var postURLEncoded = async (endpoint, data) => {
  if (process.env.REACT_APP_DEMO === "true")
    return getPlaceholderValue("POST", endpoint, data).json();
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return await fetch(new URL(endpoint, BASE_URL), {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  });
};
