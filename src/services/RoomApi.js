import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class RoomApi extends AuthenticatedApi {
  getRoomsInfo() {
    return api.get("/rooms", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  reserveRoom(body) {
    return api.post("/rooms", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
