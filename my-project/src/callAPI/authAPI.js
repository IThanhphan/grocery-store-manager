import axios from "axios";
import { apiName } from "../config/APIname";
import { login, logout } from "../redux/userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  try {
    const res = await axios.post(`${apiName}/auth/login`, user, { withCredentials: true });
    dispatch(login(res.data));
    navigate("/");
  } catch(err) {
    console.log(err);
  }
}

export const logoutUser = async (accessToken, id, dispatch, navigate, axiosJWT) => {
  try {
    await axiosJWT.post(`${apiName}/auth/logout`, { id }, {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true
    });    
    dispatch(logout());
    navigate("/login");
  } catch (err) {
    console.log(err);
  }
}

export const addNewUser = async (newUser) => {
  try {
    await axios.post(`${apiName}/auth/add-a-new-user`, newUser);    
  } catch (err) {
    console.log(err);
  }
}

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${apiName}/auth/delete-a-user?id=${id}`);    
  } catch (err) {
    console.log(err);
  }
}
