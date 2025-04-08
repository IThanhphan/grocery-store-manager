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

export const addNewProduct = async (formData) => {
  try {
    await axios.post(`${apiName}/product/add-a-new-product`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${apiName}/product/remove-product-from-system?id=${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const getAllBrand = async () => {
  try {
    const res = await axios.get(`${apiName}/brand/get-a-list-of-all-brands`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const addNewBrand = async (newBrand) => {
  try {
    await axios.post(`${apiName}/brand/add-a-new-brand`, { name: newBrand });
  } catch (error) {
    console.log(error);
  }
}

export const getAllUnit = async () => {
  try {
    const res = await axios.get(`${apiName}/unit/get-a-list-of-all-units`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const addNewUnit = async (newUnit) => {
  try {
    await axios.post(`${apiName}/unit/add-a-new-unit`, { name: newUnit });
  } catch (error) {
    console.log(error);
  }
}

