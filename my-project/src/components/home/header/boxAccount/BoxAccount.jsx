import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutUser } from "../../../../callAPI/authAPI";
import { createAxiosJWT } from "../../../../callAPI/createInstance";
import { login } from "../../../../redux/userSlice";

const BoxAccount = ({ onShowAccountBox }) => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let axiosJWTLogout = createAxiosJWT(userLogin, dispatch, login);

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  });

  const handleLogout = async () => {
    logoutUser(userLogin?.accessToken, userLogin?._id, dispatch, navigate, axiosJWTLogout);
  }

  const handleShowAccount = () => {
    onShowAccountBox(true);
  }

  return (
    <div className="box_67">
      <p>
        <b>
          {userLogin?.name} ({!userLogin?.manager ? "Nhân viên" : "Quản lý"}
          )
        </b>
      </p>
      <i className="fa-solid fa-circle-user"></i>
      <ul className="menu_user_67">
        <li className="box_67" onClick={handleShowAccount}>
          <i className="fa-solid fa-address-card"></i>
          <a href="#">Tài khoản</a>
        </li>
        <li className="box_67" onClick={handleLogout}>
          <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-90"></i>
          <a href="#">Đăng xuất</a>
        </li>
      </ul>
    </div>
  );
};

export default BoxAccount;
