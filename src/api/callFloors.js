import axios from "axios";
import { DB_URL } from "./../database/db";

export const jwtToken = localStorage.getItem("authorization");

axios.interceptors.request.use(
  function (config) {
    if (jwtToken) {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);


export async function getFloors() {
  try {
    const response = await axios.get(`${DB_URL}/floors`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load floors:" + error);
  }
}

