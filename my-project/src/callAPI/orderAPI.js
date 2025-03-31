import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllOrder = async () => {
  try {
    const res = await axios.get(`${apiName}/order/get-all-orders`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};