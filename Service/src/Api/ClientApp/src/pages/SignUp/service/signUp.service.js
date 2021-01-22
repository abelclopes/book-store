
import axios from "../../../services/api";

class SignUpService {
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
        static async getOnCallVideoService() {
          const url = "/pharmacy/oncall";
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

export default SignUpService;