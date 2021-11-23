import axiosService from "./axios-service";
import IUsers from "../types/users.type";

class OrderDataService {
    getUser() {
        return axiosService.get<Array<IUsers>>("/api");
    }
}

export default new OrderDataService();
