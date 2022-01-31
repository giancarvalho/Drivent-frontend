import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelApi extends AuthenticatedApi {
  getHotelsInfo() {
    return api.get("/hotel", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
