import { get } from "./baseApi";
const endpoint = "/api/v2/auth";

export var login = async (username, password) => {
  let res = await get(endpoint + "/login", { username, password });
  console.log(res.headers.get("set-cookie"));
  if (res.ok) {
    if ((await res.text()) === "Ok.") return { ok: true, message: "" };
    return { ok: false, message: await res.text() };
  } else {
    return { ok: false, message: await res.text() };
  }
};

export var logout = async () => {
  let res = await get(endpoint + "/logout");
  return res.status === 200;
};
