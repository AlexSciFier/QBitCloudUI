import { get } from "./baseApi";
const endpoint = "/api/v2/sync";

export var getMainData = async () => {
  let res = await get(endpoint + "/maindata");
  if (res.ok) {
    return await res.json();
  } else {
    return undefined;
  }
};
