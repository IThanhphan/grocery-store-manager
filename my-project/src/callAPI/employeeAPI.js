import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllEmployee = async () => {
  try {
    const res = await axios.get(`${apiName}/employee/get-a-list-of-all-employees`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};