import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllCategory = async () => {
  try {
    const res = await axios.get(`${apiName}/category/get-a-list-of-all-categories`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const addNewCategory = async (newBrand) => {
  try {
    await axios.post(`${apiName}/category/add-a-new-category`, { name: newBrand });
  } catch (error) {
    console.log(error)
  }
};