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
    await axiosJWT.post(`${apiName}/auth/logout`, id, {
      headers: { token: `Bearer ${accessToken}`}
    })
    dispatch(logout());
    navigate("/login");
  } catch (err) {
    console.log(err);
  }
}