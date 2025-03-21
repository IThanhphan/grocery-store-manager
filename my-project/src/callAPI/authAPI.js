import axios from "axios";
import { apiName } from "../config/APIname";
import { login, logout } from "../redux/userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  try {
    const res = await axios.post(`${apiName}/auth/login`, user);
    dispatch(login(res.data));
    navigate("/");
  } catch(err) {
    console.log(err);
  }
}

export const logoutUser = async (accessToken, dispatch, navigate) => {
  try {
    dispatch(logout(null));
    navigate("/login");
  } catch (err) {
    console.log(err);
  }
}