import createApiClient from "./api.service";
import axios from "axios";

class StudentService {
    constructor(baseUrl = "/api/students") {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }

    async getOfClass(className){
        return (await this.api.get(`/class/${className}`)).data;
    }

    async create(data) {
        return (await this.api.post('/', data)).data;
    }

    async deleteAll() {
        return (await this.api.post("/")).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new StudentService();