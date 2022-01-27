import api from "./api";

export default class EventApi {
  getEventInfo() {
    return api.get("/event/info");
  }

  getEventList() {
    return api.get("/event/list");
  }
}
