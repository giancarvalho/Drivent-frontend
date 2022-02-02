import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class EnrollmentApi extends AuthenticatedApi {
  save(body) {
    return api.post("/enrollments", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getPersonalInformations() {
    return api.get("/enrollments", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  savePlan(body) {
    return api.post("/enrollments/plan", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  postUserInscription(body) {
    return api.post("/inscription/", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
