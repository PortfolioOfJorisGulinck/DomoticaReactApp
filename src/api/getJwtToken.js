import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getToken(user) {
  try {
    const response = await axios.post(`${DB_URL}/authenticate`, user);
    console.log(user);
    if (response.status >= 200 && response.status <= 299) {
      localStorage.setItem("authorization", response.data.token);
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not create new todo:" + error);
  }
}
