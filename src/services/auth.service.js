import createApiClient from "./api.service";
import axios from "axios";
class AuthService {
    constructor(baseUrl = "/auth") {
        this.api = createApiClient(baseUrl);
    }

    async login(data) {
      return (await this.api.post("/", data)).data;
    }
}

export default new AuthService();