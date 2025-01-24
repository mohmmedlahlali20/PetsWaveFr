import axios from "axios";
import Cookies from "js-cookie"

const path = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_URL_API,
});

path.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    const token = Cookies.get('token');
    console.log('Token retrieved in interceptor:', token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } 
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default path;