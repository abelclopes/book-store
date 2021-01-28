
import axios from "../../../../services/api";

class UserService {
        static async registerUser(user) {
          const userSet = user;
          const url = "/ManagerUser/Register";
          return axios
            .request({
              method: "POST",
              url: `${url}`,
              responseType: "application/json",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              data: userSet,
            })
            .then((response) => response.data)
            .catch((error) => {
              throw error;
            });
        }
        static async LoginUser() {
          const url = "/";
          return axios
            .request({
              method: "GET",
              url: `${url}`,
              responseType: "application/json",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((response) => response.data)
            .catch((error) => {
              throw error;
            });
        }
        static async getUserInfo() {
          const url = "/api/v1/UserInfo";
          return axios
            .request({
              method: "GET",
              url: `${url}`,
              responseType: "application/json",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((response) => response.data)
            .catch((error) => {
              throw error;
            });
        }
}

export default UserService;