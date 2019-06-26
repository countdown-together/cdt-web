import callApi from "./callApi";

export function health(endpoint, path) {
  return callApi({
    api_endpoint: endpoint,
    uri: path,
    method: "GET"
  });
}
