import axios from "axios";
import { apiName } from "../config/APIname";

export const getAllCustomer = async () => {
  try {
    const res = await axios.get(`${apiName}/customer/get-a-list-of-all-customers`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const addNewCustomer = async (newCustomer) => {
  try {
    await axios.post(`${apiName}/customer/add-a-new-customer`, newCustomer);
  } catch (error) {
    console.log(error);
  }
}

export const deleteCustomer = async (id) => {
  try {
    await axios.delete(`${apiName}/customer/delete-a-customer?id=${id}`);
  } catch (error) {
    console.log(error);
  }
}