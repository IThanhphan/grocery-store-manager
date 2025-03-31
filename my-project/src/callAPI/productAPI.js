import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${apiName}/product/get-list-of-all-products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (id, infoUpdate) => {
  try {
    await axios.put(`${apiName}/product/update-product-information?id=${id}`, infoUpdate);
  } catch (error) {
    console.log(error);
  }
}