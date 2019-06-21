import callApi from "./callApi";

export function health() {
  return callApi({
    uri: "/actuator/health",
    method: "GET"
  });
}
