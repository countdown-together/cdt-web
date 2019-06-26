import callApi from "./callApi";

export function health(path) {
  return callApi({
    uri: path,
    method: "GET"
  });
}
