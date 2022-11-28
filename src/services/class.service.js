import createApiClient from "./api.service";
import axios from "axios";

class ClassService {
    constructor(baseUrl = "/api/class") {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }
}

export default new ClassService();