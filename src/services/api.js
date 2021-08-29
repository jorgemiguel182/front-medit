<<<<<<< HEAD
import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://9flfzc9e5g.execute-api.us-east-2.amazonaws.com/Prod"
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

=======
import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://9flfzc9e5g.execute-api.us-east-2.amazonaws.com/Prod"
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

>>>>>>> 9884c39db954c1951e3286d14e4fe7e6c6b89e21
export default api;