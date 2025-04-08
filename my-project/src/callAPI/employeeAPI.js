import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllEmployee = async () => {
  try {
    const res = await axios.get(`${apiName}/auth/get-a-list-of-all-users`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};