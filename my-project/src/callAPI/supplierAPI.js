import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllSupplier = async () => {
  try {
    const res = await axios.get(`${apiName}/supplier/get-list-of-all-suppliers`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const addNewSupplier = async (newSupplier) => {
  try {
    await axios.post(`${apiName}/supplier/add-a-new-supplier`, newSupplier);
  } catch (error) {
    console.log(error)
  }
};

export const deleteSupplier = async (id) => {
  try {
    await axios.delete(`${apiName}/supplier/delete-a-supplier?id=${id}`);
  } catch (error) {
    console.log(error)
  }
};